#!/usr/bin/env python3
"""
Extrai os dados de um lote de boletos condominiais (Condomínio Parque Tropical,
banco 481-2) a partir do PDF mensal enviado pela administradora.

O PDF segue um padrão de 2 páginas por unidade:
  - página ímpar (0-indexed par): "Recibo do Pagador" com valor, nosso número,
    número do documento e a linha digitável.
  - página seguinte: capa/envelope com "Unidade:" e "Vencimento:" em formato limpo.

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

CONDOMINIO = "Condomínio Parque Tropical"
PAGADOR = "Pompeu Fusco Angelico"
BANCO = "481-2"

MESES_PT = {
    1: "Janeiro", 2: "Fevereiro", 3: "Março", 4: "Abril",
    5: "Maio", 6: "Junho", 7: "Julho", 8: "Agosto",
    9: "Setembro", 10: "Outubro", 11: "Novembro", 12: "Dezembro",
}


def extract(pdf_path):
    import pdfplumber

    boletos = []
    vencimentos = set()
    with pdfplumber.open(pdf_path) as pdf:
        pages = pdf.pages
        if len(pages) % 2 != 0:
            print(f"Aviso: número ímpar de páginas ({len(pages)}); esperado 2 por boleto.", file=sys.stderr)

        for i in range(0, len(pages), 2):
            text = pages[i].extract_text() or ""
            cover_text = pages[i + 1].extract_text() if i + 1 < len(pages) else ""

            m_u = re.search(r'Unidade:\s*([A-Z]{2})\s?(\d{3,4})', text)
            if not m_u:
                print(f"Aviso: não encontrei 'Unidade:' na página {i + 1}, pulando.", file=sys.stderr)
                continue
            unidade = f"{m_u.group(1)} {m_u.group(2)}"

            m_doc = re.search(
                r'Data Docto\.\s*Número Documento.*?\n(\d{2}/\d{2}/\d{4})\s+(\d+)\s+DS',
                text, re.S
            )
            doc = m_doc.group(2) if m_doc else None

            m_linha = re.search(
                r'(\d{5}\.\d{5}\s+\d{5}\.\d{6}\s+\d{5}\.\d{6}\s+\d\s+\d{14})',
                text
            )
            linha = m_linha.group(1) if m_linha else None

            m_valor = re.search(
                r'Valor Mora / Multa / Juros\s*Valor Total Cobrado\s*\n\d+\s+([\d.]+,\d{2})',
                text
            )
            if not m_valor:
                m_valor = re.search(
                    r'\(=\)\s*Valor do Documento\s*\n([\d.]+,\d{2})',
                    text
                )
            valor = float(m_valor.group(1).replace('.', '').replace(',', '.')) if m_valor else None

            m_venc = re.search(r'Vencimento:(\d{2}/\d{2}/\d{4})', cover_text or "")
            venc = m_venc.group(1) if m_venc else None
            if venc:
                vencimentos.add(venc)

            if doc is None or linha is None or valor is None:
                print(
                    f"Aviso: página {i + 1} (unidade {unidade}) incompleta -> "
                    f"doc={doc} linha={linha} valor={valor}. Unidade ignorada.",
                    file=sys.stderr
                )
                continue

            boletos.append({"u": unidade, "v": valor, "doc": doc, "linha": linha, "venc": venc})

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
