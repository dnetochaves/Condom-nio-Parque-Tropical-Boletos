#!/usr/bin/env python3
"""
Analisa um extrato bancário exportado do Asaas (CSV) e gera um relatório em
Markdown: resumo do período, cobranças recebidas (por pagador), pagamentos de
condomínio por unidade, outros pagamentos de conta, transferências Pix
enviadas (por destinatário), taxas da plataforma e transações estornadas.

Uso:
    python3 analisar_extrato.py "<caminho-do-csv>" [--json]

Saída (stdout): relatório em Markdown, ou JSON estruturado com --json.
Avisos/erros vão para stderr.
"""
import sys
import csv
import re
import json
from collections import defaultdict


def parse_valor(s):
    s = (s or "").strip()
    if not s:
        return None
    # Asaas exporta ora em formato "americano" (124132.13), ora em formato
    # brasileiro (68.039,43) na linha de Saldo Final. Se houver vírgula,
    # tratamos como separador decimal brasileiro (removendo pontos de milhar).
    if "," in s:
        s = s.replace(".", "").replace(",", ".")
    return float(s)


def sniff_delimiter(path):
    """Asaas já exportou tanto com vírgula (campos entre aspas) quanto com
    ponto e vírgula (sem aspas). Detecta pelo que aparece mais nas primeiras
    linhas do arquivo."""
    with open(path, encoding="utf-8-sig") as f:
        sample = "".join(f.readline() for _ in range(10))
    return ";" if sample.count(";") > sample.count(",") else ","


def load_rows(path):
    delimiter = sniff_delimiter(path)
    with open(path, newline="", encoding="utf-8-sig") as f:
        reader = list(csv.reader(f, delimiter=delimiter))

    header_idx = None
    for i, row in enumerate(reader):
        if row and row[0].strip() == "Data" and len(row) > 1 and row[1].strip() == "Transação":
            header_idx = i
            break
    if header_idx is None:
        raise ValueError("Não encontrei a linha de cabeçalho ('Data', 'Transação', ...) no CSV.")

    header = [h.strip() for h in reader[header_idx]]
    rows = []
    for row in reader[header_idx + 1:]:
        if not row or all(not c.strip() for c in row):
            continue
        rows.append(dict(zip(header, row)))
    return rows


def fmt_brl(v):
    if v is None:
        return "—"
    neg = v < 0
    s = f"{abs(v):,.2f}"
    s = s.replace(",", "_").replace(".", ",").replace("_", ".")
    return f"{'-' if neg else ''}R$ {s}"


UNIDADE_RE = re.compile(r"CONDOMINIO PQT \d{2}/\d{4}\s*-\s*(.+)$")
FATURA_RE = re.compile(r"fatura nr\. \d+\s+(.+)$")
PIX_RE = re.compile(r"Transação via Pix com (?:chave|dados manuais) para\s+(.+)$")
SERASA_RE = re.compile(r"Taxa de consulta Serasa do (CPF|CNPJ) ([\d./-]+)")


def analisar(path):
    rows = load_rows(path)

    saldo_inicial = saldo_final = None
    transacoes = []

    for r in rows:
        desc = (r.get("Descrição") or "").strip()
        valor = parse_valor(r.get("Valor"))
        saldo = parse_valor(r.get("Saldo"))
        if desc == "Saldo Inicial":
            saldo_inicial = saldo
            continue
        if desc == "Saldo Final":
            saldo_final = saldo
            continue
        if valor is None:
            continue
        transacoes.append(r)

    if not transacoes:
        raise ValueError("Nenhuma transação encontrada no CSV.")

    datas = [t["Data"] for t in transacoes if t.get("Data")]
    periodo_inicio, periodo_fim = datas[0], datas[-1]

    valores = [parse_valor(t["Valor"]) for t in transacoes]
    total_credito = sum(v for v in valores if v > 0)
    total_debito = sum(v for v in valores if v < 0)

    cobrancas = defaultdict(lambda: {"total": 0.0, "qtd": 0})
    condominio_unidades = []
    outros_pagamentos = []
    pix_saidas = defaultdict(lambda: {"total": 0.0, "qtd": 0})
    taxas_boleto = {"total": 0.0, "qtd": 0}
    taxa_asaas = {"total": 0.0, "qtd": 0}
    serasa = []
    estornadas = []
    outros_tipos = defaultdict(lambda: {"total": 0.0, "qtd": 0})

    tipos_conhecidos = {
        "Cobrança recebida", "Pagamento de conta", "Transação via Pix",
        "Taxa de boleto, cartão ou Pix", "Taxa da mensalidade do plano Asaas",
        "Taxa de consulta Serasa",
    }

    for t in transacoes:
        tipo = (t.get("Tipo de transação") or "").strip()
        desc = (t.get("Descrição") or "").strip()
        valor = parse_valor(t["Valor"])
        estorno = (t.get("Transação estornada") or "").strip()
        if estorno:
            estornadas.append(t)

        if tipo == "Cobrança recebida":
            m = FATURA_RE.search(desc)
            nome = m.group(1).strip() if m else (desc or "(sem descrição)")
            cobrancas[nome]["total"] += valor
            cobrancas[nome]["qtd"] += 1
        elif tipo == "Pagamento de conta":
            m = UNIDADE_RE.search(desc)
            if m:
                condominio_unidades.append({"unidade": m.group(1).strip(), "valor": valor, "data": t.get("Data")})
            else:
                outros_pagamentos.append({"descricao": desc or "Pagamento de conta (sem descrição)", "valor": valor, "data": t.get("Data")})
        elif tipo == "Transação via Pix":
            m = PIX_RE.search(desc)
            nome = m.group(1).strip() if m else (desc or "(sem descrição)")
            pix_saidas[nome]["total"] += valor
            pix_saidas[nome]["qtd"] += 1
        elif tipo == "Taxa de boleto, cartão ou Pix":
            taxas_boleto["total"] += valor
            taxas_boleto["qtd"] += 1
        elif tipo == "Taxa da mensalidade do plano Asaas":
            taxa_asaas["total"] += valor
            taxa_asaas["qtd"] += 1
        elif tipo == "Taxa de consulta Serasa":
            m = SERASA_RE.search(desc)
            serasa.append({
                "tipo": m.group(1) if m else "?",
                "doc": m.group(2) if m else desc,
                "valor": valor,
                "data": t.get("Data"),
            })
        else:
            outros_tipos[tipo or "(tipo não identificado)"]["total"] += valor
            outros_tipos[tipo or "(tipo não identificado)"]["qtd"] += 1

    return {
        "periodo_inicio": periodo_inicio,
        "periodo_fim": periodo_fim,
        "saldo_inicial": saldo_inicial,
        "saldo_final": saldo_final,
        "total_credito": total_credito,
        "total_debito": total_debito,
        "qtd_transacoes": len(transacoes),
        "cobrancas": cobrancas,
        "condominio_unidades": condominio_unidades,
        "outros_pagamentos": outros_pagamentos,
        "pix_saidas": pix_saidas,
        "taxas_boleto": taxas_boleto,
        "taxa_asaas": taxa_asaas,
        "serasa": serasa,
        "estornadas": estornadas,
        "outros_tipos": outros_tipos,
    }


def render_markdown(a):
    out = []
    out.append(f"# Análise do extrato Asaas — {a['periodo_inicio']} a {a['periodo_fim']}")
    out.append("")
    out.append("## Resumo do período")
    out.append("")
    out.append(f"- **Saldo inicial:** {fmt_brl(a['saldo_inicial'])}")
    out.append(f"- **Saldo final:** {fmt_brl(a['saldo_final'])}")
    if a["saldo_inicial"] is not None and a["saldo_final"] is not None:
        variacao = a["saldo_final"] - a["saldo_inicial"]
        out.append(f"- **Variação no período:** {fmt_brl(variacao)}")
    else:
        variacao = None
    out.append(f"- **Total de créditos (entradas):** {fmt_brl(a['total_credito'])}")
    out.append(f"- **Total de débitos (saídas):** {fmt_brl(a['total_debito'])}")
    out.append(f"- **Transações no período:** {a['qtd_transacoes']}")
    if variacao is not None:
        calculado = a["total_credito"] + a["total_debito"]
        diff = round(variacao - calculado, 2)
        if abs(diff) > 0.01:
            out.append(
                f"- ⚠️ **Divergência de conferência:** {fmt_brl(diff)} "
                f"(créditos + débitos não bate exatamente com a variação de saldo — confira o CSV)"
            )
    out.append("")

    out.append("## Cobranças recebidas (boletos/Pix de clientes)")
    out.append("")
    total_cobrancas = sum(v["total"] for v in a["cobrancas"].values())
    qtd_cobrancas = sum(v["qtd"] for v in a["cobrancas"].values())
    out.append(f"Total recebido: **{fmt_brl(total_cobrancas)}** em {qtd_cobrancas} cobranças, de {len(a['cobrancas'])} pagadores.")
    out.append("")
    if a["cobrancas"]:
        out.append("| Pagador | Nº de cobranças | Total recebido |")
        out.append("|---|---|---|")
        for nome, v in sorted(a["cobrancas"].items(), key=lambda kv: -kv[1]["total"]):
            out.append(f"| {nome} | {v['qtd']} | {fmt_brl(v['total'])} |")
        out.append("")

    out.append("## Pagamentos de condomínio por unidade")
    out.append("")
    total_condo = sum(u["valor"] for u in a["condominio_unidades"])
    out.append(f"Total pago em taxas de condomínio: **{fmt_brl(total_condo)}** para {len(a['condominio_unidades'])} unidades.")
    out.append("")
    if a["condominio_unidades"]:
        out.append("| Data | Unidade | Valor |")
        out.append("|---|---|---|")
        for u in sorted(a["condominio_unidades"], key=lambda u: u["unidade"]):
            out.append(f"| {u['data']} | {u['unidade']} | {fmt_brl(u['valor'])} |")
        out.append("")

    if a["outros_pagamentos"]:
        out.append("## Outros pagamentos de conta")
        out.append("")
        total_outros = sum(p["valor"] for p in a["outros_pagamentos"])
        out.append(f"Total: **{fmt_brl(total_outros)}** em {len(a['outros_pagamentos'])} pagamentos.")
        out.append("")
        out.append("| Data | Descrição | Valor |")
        out.append("|---|---|---|")
        for p in a["outros_pagamentos"]:
            out.append(f"| {p['data']} | {p['descricao']} | {fmt_brl(p['valor'])} |")
        out.append("")

    out.append("## Transferências via Pix enviadas")
    out.append("")
    total_pix = sum(v["total"] for v in a["pix_saidas"].values())
    qtd_pix = sum(v["qtd"] for v in a["pix_saidas"].values())
    out.append(f"Total enviado: **{fmt_brl(total_pix)}** em {qtd_pix} transferências, para {len(a['pix_saidas'])} destinatários.")
    out.append("")
    if a["pix_saidas"]:
        out.append("| Destinatário | Nº de transferências | Total enviado |")
        out.append("|---|---|---|")
        for nome, v in sorted(a["pix_saidas"].items(), key=lambda kv: kv[1]["total"]):
            out.append(f"| {nome} | {v['qtd']} | {fmt_brl(v['total'])} |")
        out.append("")

    out.append("## Taxas e custos da plataforma")
    out.append("")
    out.append(f"- Taxas de boleto/cartão/Pix: {a['taxas_boleto']['qtd']} cobrança(s), total {fmt_brl(a['taxas_boleto']['total'])}")
    out.append(f"- Mensalidade do plano Asaas: {a['taxa_asaas']['qtd']} cobrança(s), total {fmt_brl(a['taxa_asaas']['total'])}")
    if a["serasa"]:
        total_serasa = sum(s["valor"] for s in a["serasa"])
        out.append(f"- Consultas Serasa: {len(a['serasa'])} consulta(s), total {fmt_brl(total_serasa)}")
        for s in a["serasa"]:
            out.append(f"  - {s['data']} — {s['tipo']} {s['doc']} — {fmt_brl(s['valor'])}")
    out.append("")

    if a["outros_tipos"]:
        out.append("## Outros tipos de transação encontrados")
        out.append("")
        out.append("_Tipos não mapeados explicitamente por esta skill — revise manualmente se relevante._")
        out.append("")
        out.append("| Tipo | Nº | Total |")
        out.append("|---|---|---|")
        for tipo, v in sorted(a["outros_tipos"].items(), key=lambda kv: -abs(kv[1]["total"])):
            out.append(f"| {tipo} | {v['qtd']} | {fmt_brl(v['total'])} |")
        out.append("")

    if a["estornadas"]:
        out.append("## ⚠️ Transações estornadas")
        out.append("")
        for t in a["estornadas"]:
            out.append(f"- {t.get('Data')} — {t.get('Descrição')} — {fmt_brl(parse_valor(t['Valor']))}")
        out.append("")

    return "\n".join(out)


def to_dict(a):
    """Estrutura JSON-serializável, em camelCase, para consumo por outros programas
    (ex.: o dashboard do app Angular)."""
    variacao = None
    if a["saldo_inicial"] is not None and a["saldo_final"] is not None:
        variacao = round(a["saldo_final"] - a["saldo_inicial"], 2)

    return {
        "periodoInicio": a["periodo_inicio"],
        "periodoFim": a["periodo_fim"],
        "saldoInicial": a["saldo_inicial"],
        "saldoFinal": a["saldo_final"],
        "variacao": variacao,
        "totalCredito": round(a["total_credito"], 2),
        "totalDebito": round(a["total_debito"], 2),
        "qtdTransacoes": a["qtd_transacoes"],
        "cobrancas": [
            {"pagador": nome, "qtd": v["qtd"], "total": round(v["total"], 2)}
            for nome, v in sorted(a["cobrancas"].items(), key=lambda kv: -kv[1]["total"])
        ],
        "condominioUnidades": [
            {"data": u["data"], "unidade": u["unidade"], "valor": round(u["valor"], 2)}
            for u in sorted(a["condominio_unidades"], key=lambda u: u["unidade"])
        ],
        "outrosPagamentos": [
            {"data": p["data"], "descricao": p["descricao"], "valor": round(p["valor"], 2)}
            for p in a["outros_pagamentos"]
        ],
        "pixSaidas": [
            {"destinatario": nome, "qtd": v["qtd"], "total": round(v["total"], 2)}
            for nome, v in sorted(a["pix_saidas"].items(), key=lambda kv: kv[1]["total"])
        ],
        "taxas": {
            "boleto": {"qtd": a["taxas_boleto"]["qtd"], "total": round(a["taxas_boleto"]["total"], 2)},
            "asaas": {"qtd": a["taxa_asaas"]["qtd"], "total": round(a["taxa_asaas"]["total"], 2)},
            "serasa": [
                {"data": s["data"], "tipo": s["tipo"], "documento": s["doc"], "valor": round(s["valor"], 2)}
                for s in a["serasa"]
            ],
        },
        "outrosTipos": [
            {"tipo": tipo, "qtd": v["qtd"], "total": round(v["total"], 2)}
            for tipo, v in sorted(a["outros_tipos"].items(), key=lambda kv: -abs(kv[1]["total"]))
        ],
        "estornadas": [
            {"data": t.get("Data"), "descricao": t.get("Descrição"), "valor": parse_valor(t["Valor"])}
            for t in a["estornadas"]
        ],
    }


def main():
    args = [a for a in sys.argv[1:] if a != "--json"]
    as_json = "--json" in sys.argv[1:]

    if len(args) != 1:
        print("Uso: python3 analisar_extrato.py <caminho-do-csv> [--json]", file=sys.stderr)
        sys.exit(1)

    try:
        a = analisar(args[0])
    except Exception as e:
        print(f"Erro ao analisar o extrato: {e}", file=sys.stderr)
        sys.exit(1)

    if as_json:
        print(json.dumps(to_dict(a), ensure_ascii=False, indent=2))
    else:
        print(render_markdown(a))


if __name__ == "__main__":
    main()
