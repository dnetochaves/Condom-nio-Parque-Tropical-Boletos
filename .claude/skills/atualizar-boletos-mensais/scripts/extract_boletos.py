#!/usr/bin/env python3
"""
Extrai os dados de um lote de boletos condominiais (Condomínio Parque Tropical,
banco 481-2) a partir do PDF mensal enviado pela administradora.

O PDF segue um padrão de 2 páginas por unidade:
  - página ímpar (0-indexed par): "Recibo do Pagador" com valor, nosso número,
    número do documento e a linha digitável.
  - página seguinte: capa/envelope (não é usada no modo OCR).

Dois modos de leitura, escolhidos automaticamente por página:
  - texto: o PDF tem camada de texto (formato antigo) -> pdfplumber.
  - OCR:   a página é só imagem (ex.: novembro/2026) -> rapidocr + pymupdf.

Em qualquer modo, a linha digitável é validada pelos dígitos verificadores
(3 campos módulo 10 + DV geral módulo 11), e valor e vencimento são conferidos
contra os embutidos nela (fator de vencimento + valor). Leituras que não
passam na validação são recusadas — o OCR nunca grava um dígito "chutado".

Uso:
    python3 extract_boletos.py <caminho-para-pdf> > frontend/public/data/boletos.json

Saída:
    stdout: o JSON final no formato consumido pelo app Angular
      { mes, condominio, pagador, vencimento, banco,
        boletos: [{ unidade, valor, documento, linhaDigitavel }] }
    stderr: uma linha de resumo (# N boletos | vencimento DD/MM/AAAA | total R$ ...)
      e avisos de dados incompletos ou inconsistentes.
"""
import sys
import re
import json
from datetime import date, timedelta

CONDOMINIO = "Condomínio Parque Tropical"
PAGADOR = "Pompeu Fusco Angelico"
BANCO = "481-2"

MESES_PT = {
    1: "Janeiro", 2: "Fevereiro", 3: "Março", 4: "Abril",
    5: "Maio", 6: "Junho", 7: "Julho", 8: "Agosto",
    9: "Setembro", 10: "Outubro", 11: "Novembro", 12: "Dezembro",
}

# Fator de vencimento FEBRABAN após o reinício de 2025: 1000 = 22/02/2025.
FATOR_BASE = date(2025, 2, 22)
FATOR_BASE_NUM = 1000

# \s* (e não \s+) porque o OCR às vezes cola os blocos sem espaço.
RE_LINHA = re.compile(
    r'(\d{5}\.\d{5})\s*(\d{5}\.\d{6})\s*(\d{5}\.\d{6})\s*(\d)\s*(\d{14})'
)
RE_BARRAS = re.compile(r'(?<!\d)(\d{44})(?!\d)')
RE_UNIDADE = re.compile(r'Unidade:\s*([A-Z]{2})\s?(\d{3,4})')
RE_NOSSO_NUMERO = re.compile(r'001/00(\d+)-\d')

OCR_DPIS = (220, 300)
MIN_CHARS_TEXTO = 50

_ocr_engine = None
_fitz_doc = None


# --------------------------------------------------------------------------
# Validação da linha digitável
# --------------------------------------------------------------------------

def _dv_mod10(digitos):
    soma = 0
    for pos, ch in enumerate(reversed(digitos)):
        n = int(ch) * (2 if pos % 2 == 0 else 1)
        soma += n // 10 + n % 10
    return (10 - soma % 10) % 10


def _dv_mod11(digitos43):
    soma = 0
    for pos, ch in enumerate(reversed(digitos43)):
        soma += int(ch) * (2 + pos % 8)
    dv = 11 - soma % 11
    return 1 if dv in (0, 10, 11) else dv


def validar_linha(m):
    """m: match de RE_LINHA. Retorna (ok, motivo)."""
    c1, c2, c3 = (m.group(k).replace('.', '') for k in (1, 2, 3))
    dv_geral, fator_valor = m.group(4), m.group(5)
    for nome, campo in (("campo 1", c1), ("campo 2", c2), ("campo 3", c3)):
        if _dv_mod10(campo[:-1]) != int(campo[-1]):
            return False, f"DV do {nome} não confere"
    livre = c1[4:9] + c2[:10] + c3[:10]
    barras43 = c1[:4] + fator_valor + livre
    if _dv_mod11(barras43) != int(dv_geral):
        return False, "DV geral não confere"
    return True, ""


def valor_e_vencimento_da_linha(m):
    fator_valor = m.group(5)
    fator, centavos = int(fator_valor[:4]), int(fator_valor[4:])
    venc = FATOR_BASE + timedelta(days=fator - FATOR_BASE_NUM)
    return centavos / 100.0, venc.strftime("%d/%m/%Y")


def linha_str(m):
    return f"{m.group(1)} {m.group(2)} {m.group(3)} {m.group(4)} {m.group(5)}"


def linha_a_partir_das_barras(barras):
    """Monta a linha digitável a partir do código de barras de 44 dígitos.
    Retorna um match de RE_LINHA, ou None se o DV geral das barras não conferir."""
    if _dv_mod11(barras[:4] + barras[5:]) != int(barras[4]):
        return None
    livre = barras[19:]
    c1 = barras[:4] + livre[:5]
    c2 = livre[5:15]
    c3 = livre[15:25]
    f1 = c1 + str(_dv_mod10(c1))
    f2 = c2 + str(_dv_mod10(c2))
    f3 = c3 + str(_dv_mod10(c3))
    texto = f"{f1[:5]}.{f1[5:]} {f2[:5]}.{f2[5:]} {f3[:5]}.{f3[5:]} {barras[4]} {barras[5:19]}"
    return RE_LINHA.search(texto)


def achar_linha_valida(texto):
    """Linha digitável impressa (validada); se falhar, reconstruída das barras."""
    m = RE_LINHA.search(texto)
    if m:
        ok, motivo = validar_linha(m)
        if ok:
            return m, ""
    else:
        motivo = "linha digitável não encontrada"
    for barras in RE_BARRAS.findall(texto):
        m_barras = linha_a_partir_das_barras(barras)
        if m_barras:
            return m_barras, ""
    return None, motivo


# --------------------------------------------------------------------------
# Leitura por OCR
# --------------------------------------------------------------------------

def _ocr_page_text(page_index, dpi):
    global _ocr_engine, _fitz_doc
    import numpy as np
    pix = _fitz_doc[page_index].get_pixmap(dpi=dpi)
    img = np.frombuffer(pix.samples, dtype=np.uint8).reshape(pix.h, pix.w, pix.n)
    result, _ = _ocr_engine(img)
    itens = sorted(
        ((r[0][0][1], r[0][0][0], r[1]) for r in (result or [])),
        key=lambda t: (round(t[0] / 12), t[1]),
    )
    return "\n".join(t[2] for t in itens)


def _init_ocr(pdf_path):
    global _ocr_engine, _fitz_doc
    if _ocr_engine is not None:
        return
    try:
        import fitz  # pymupdf
        from rapidocr_onnxruntime import RapidOCR
    except ImportError:
        print(
            "Este PDF não tem camada de texto (só imagem) e o OCR não está instalado.\n"
            "Rode: pip3 install rapidocr-onnxruntime pymupdf   e tente de novo.",
            file=sys.stderr,
        )
        sys.exit(1)
    _ocr_engine = RapidOCR()
    _fitz_doc = fitz.open(pdf_path)


def ler_pagina_ocr(pdf_path, page_index):
    """Tenta cada DPI até a linha digitável passar na validação."""
    _init_ocr(pdf_path)
    ultimo_motivo = "linha digitável não encontrada"
    for dpi in OCR_DPIS:
        texto = _ocr_page_text(page_index, dpi)
        m_linha, motivo = achar_linha_valida(texto)
        if not m_linha:
            ultimo_motivo = motivo
            continue
        m_u = RE_UNIDADE.search(texto)
        m_nn = RE_NOSSO_NUMERO.search(texto)
        if not m_u or not m_nn:
            ultimo_motivo = "unidade ou nosso número não encontrados"
            continue
        valor, venc = valor_e_vencimento_da_linha(m_linha)
        if venc not in texto:
            # a data derivada do fator deve aparecer impressa no boleto
            ultimo_motivo = f"vencimento {venc} (do fator) não aparece no boleto"
            continue
        return {
            "u": f"{m_u.group(1)} {m_u.group(2)}",
            "v": valor,
            "doc": m_nn.group(1),
            "linha": linha_str(m_linha),
            "venc": venc,
        }, None
    return None, ultimo_motivo


# --------------------------------------------------------------------------
# Leitura por texto (PDFs com camada de texto)
# --------------------------------------------------------------------------

def ler_pagina_texto(text, cover_text, pagina):
    m_u = RE_UNIDADE.search(text)
    if not m_u:
        return None, "não encontrei 'Unidade:'"
    unidade = f"{m_u.group(1)} {m_u.group(2)}"

    m_doc = re.search(
        r'Data Docto\.\s*Número Documento.*?\n(\d{2}/\d{2}/\d{4})\s+(\d+)\s+DS',
        text, re.S
    )
    doc = m_doc.group(2) if m_doc else None

    m_linha = RE_LINHA.search(text)
    linha = linha_str(m_linha) if m_linha else None

    m_valor = re.search(
        r'Valor Mora / Multa / Juros\s*Valor Total Cobrado\s*\n\d+\s+([\d.]+,\d{2})',
        text
    )
    if not m_valor:
        m_valor = re.search(r'\(=\)\s*Valor do Documento\s*\n([\d.]+,\d{2})', text)
    valor = float(m_valor.group(1).replace('.', '').replace(',', '.')) if m_valor else None

    m_venc = re.search(r'Vencimento:(\d{2}/\d{2}/\d{4})', cover_text or "")
    venc = m_venc.group(1) if m_venc else None

    if doc is None or linha is None or valor is None:
        return None, f"incompleta (unidade {unidade}): doc={doc} linha={linha} valor={valor}"

    ok, motivo = validar_linha(m_linha)
    if not ok:
        print(f"Aviso: página {pagina} (unidade {unidade}): {motivo}.", file=sys.stderr)
    else:
        v_linha, venc_linha = valor_e_vencimento_da_linha(m_linha)
        if abs(v_linha - valor) > 0.005:
            print(f"Aviso: página {pagina} (unidade {unidade}): valor {valor} difere do da linha digitável {v_linha}.", file=sys.stderr)
        if venc and venc != venc_linha:
            print(f"Aviso: página {pagina} (unidade {unidade}): vencimento {venc} difere do da linha digitável {venc_linha}.", file=sys.stderr)

    return {"u": unidade, "v": valor, "doc": doc, "linha": linha, "venc": venc}, None


# --------------------------------------------------------------------------

def extract(pdf_path):
    import pdfplumber

    boletos = []
    vencimentos = set()
    usou_ocr = False
    with pdfplumber.open(pdf_path) as pdf:
        pages = pdf.pages
        if len(pages) % 2 != 0:
            print(f"Aviso: número ímpar de páginas ({len(pages)}); esperado 2 por boleto.", file=sys.stderr)

        for i in range(0, len(pages), 2):
            text = pages[i].extract_text() or ""
            if len(text.strip()) >= MIN_CHARS_TEXTO:
                cover_text = pages[i + 1].extract_text() if i + 1 < len(pages) else ""
                boleto, erro = ler_pagina_texto(text, cover_text, i + 1)
            else:
                usou_ocr = True
                boleto, erro = ler_pagina_ocr(pdf_path, i)

            if boleto is None:
                print(f"Aviso: página {i + 1} ignorada — {erro}.", file=sys.stderr)
                continue
            if boleto["venc"]:
                vencimentos.add(boleto["venc"])
            boletos.append(boleto)

    if usou_ocr:
        print("Nota: páginas sem texto foram lidas por OCR (linhas digitáveis validadas pelos dígitos verificadores).", file=sys.stderr)

    boletos.sort(key=lambda b: (b["u"].split()[0], int(b["u"].split()[1])))
    return boletos, vencimentos


def fmt_brl(v):
    s = f"{v:,.2f}"
    return "R$ " + s.replace(",", "_").replace(".", ",").replace("_", ".")


def venc_to_mes_e_iso(venc):
    """'05/09/2026' -> ('Setembro 2026', '2026-09-05')"""
    dia, mes_num, ano = venc.split('/')
    mes_nome = MESES_PT.get(int(mes_num), mes_num)
    return f"{mes_nome} {ano}", f"{ano}-{mes_num}-{dia}"


def main():
    if len(sys.argv) != 2:
        print("Uso: python3 extract_boletos.py <caminho-para-pdf>", file=sys.stderr)
        sys.exit(1)

    try:
        import pdfplumber  # noqa: F401
    except ImportError:
        print("Dependência ausente. Rode: pip3 install pdfplumber", file=sys.stderr)
        sys.exit(1)

    boletos, vencimentos = extract(sys.argv[1])

    if not boletos:
        print("Nenhum boleto extraído — verifique se o layout do PDF mudou.", file=sys.stderr)
        sys.exit(1)

    if len(vencimentos) > 1:
        print(f"Aviso: mais de uma data de vencimento encontrada entre as unidades: {sorted(vencimentos)}", file=sys.stderr)

    total = sum(b["v"] for b in boletos)
    venc = sorted(vencimentos)[0] if vencimentos else None
    mes_titulo, vencimento_iso = venc_to_mes_e_iso(venc) if venc else (None, None)

    print(f"# {len(boletos)} boletos | vencimento {venc} | total {fmt_brl(total)}", file=sys.stderr)

    dados = {
        "mes": mes_titulo,
        "condominio": CONDOMINIO,
        "pagador": PAGADOR,
        "vencimento": vencimento_iso,
        "banco": BANCO,
        "boletos": [
            {
                "unidade": b["u"],
                "valor": round(b["v"], 2),
                "documento": b["doc"],
                "linhaDigitavel": b["linha"],
            }
            for b in boletos
        ],
    }
    print(json.dumps(dados, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
