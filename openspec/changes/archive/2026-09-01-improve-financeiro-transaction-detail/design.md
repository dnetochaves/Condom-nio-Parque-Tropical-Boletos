## Context

A tela Financeiro (`frontend/src/app/features/dashboard/dashboard-page.ts`/`.html`, rota `/financeiro`) consome `ExtratoFinanceiro` (`extrato.model.ts`) carregado de `frontend/public/data/extrato-financeiro.json` via `ExtratoService`. Esse JSON é gerado por `.claude/skills/analisar-extrato-asaas/scripts/analisar_extrato.py --json` a partir do CSV exportado do Asaas. Hoje `cobrancas` (por pagador), `pixSaidas` (por destinatário) e `taxas.boleto`/`taxas.asaas` são puramente agregados (`{qtd, total}` ou `{pagador/destinatario, qtd, total}`), sem lista de transações individuais. `condominioUnidades` e `outrosPagamentos` já são listas por transação. Ver `proposal.md` para a motivação; ver `specs/financeiro-page/spec.md` para o comportamento alvo.

## Goals / Non-Goals

**Goals:**
- Adicionar o texto da coluna "Tipo do lançamento" do CSV como informação por transação em todos os 5 blocos, sem precisar de nova fonte de dados.
- Para Cobranças, Pix e Taxas (hoje só agregados), expor a lista de transações individuais por trás de cada agregado, sempre visível ao abrir o bloco — sem introduzir uma segunda camada de interação (nada de expandir duas vezes).
- Manter os campos agregados (`qtd`, `total`) exatamente como estão hoje, para não quebrar `dashboard-overview-page` (que lê `extrato.taxas.boleto.total`, `extrato.taxas.asaas.total`, `extrato.taxas.serasa`, `extrato.totalCredito`, `extrato.condominioUnidades`).

**Non-Goals:**
- Não é objetivo mudar a fonte de dados (continua sendo o CSV do extrato Asaas, processado manualmente via skill).
- Não cobre a tela de Boletos nem a tela de Dashboard (visão geral).
- Não introduz paginação, busca ou filtro dentro das listas de transações — são listas simples, como as que já existem hoje em `condominioUnidades`/`outrosPagamentos`.

## Decisions

### 1. Nova interface `TransacaoDetalhe`, reaproveitada em 3 blocos
Adicionar em `extrato.model.ts`:
```ts
export interface TransacaoDetalhe {
  data: string;
  valor: number;
  tipoLancamento: string;
}
```
E estender as interfaces existentes:
```ts
export interface CobrancaResumo {
  pagador: string;
  qtd: number;
  total: number;
  transacoes: TransacaoDetalhe[];
}

export interface PixDestinatario {
  destinatario: string;
  qtd: number;
  total: number;
  transacoes: TransacaoDetalhe[];
}

export interface TaxaResumo {
  qtd: number;
  total: number;
  transacoes: TransacaoDetalhe[];
}
```
`CondominioUnidade` e `OutroPagamento` ganham apenas `tipoLancamento: string` como novo campo (já são listas por transação, não precisam de aninhamento).

**Alternativa considerada**: criar uma interface de transação diferente por bloco (`CobrancaTransacao`, `PixTransacao`, ...). Rejeitada — os três blocos precisam exatamente dos mesmos três campos (data, valor, tipo de lançamento), então uma interface única reduz duplicação sem perder clareza.

### 2. Serasa não ganha `tipoLancamento`
As consultas Serasa (`SerasaConsulta`) já são listadas individualmente hoje, e o texto de "Tipo do lançamento" observado no CSV para essas transações é sempre o mesmo valor genérico ("CONSULTA DE CREDITO"), sem informação adicional além do que `tipo` (CPF/CNPJ) e `documento` já mostram. Por isso `SerasaConsulta` não é alterada nesta change — evita adicionar um campo que não carrega informação nova.

### 3. Script Python: ler a coluna e agrupar transações
Em `analisar_extrato.py`:
- Ler `t.get("Tipo do lançamento")` (nome exato da coluna no CSV) em cada linha processada.
- Para `cobrancas` e `pix_saidas` (hoje `defaultdict` de `{total, qtd}`), adicionar uma lista `transacoes` a cada entrada e apendar `{data, valor, tipoLancamento}` a cada transação processada daquele pagador/destinatário.
- Para taxas de boleto e mensalidade Asaas (hoje contadores simples `{total, qtd}`), transformar em `{total, qtd, transacoes: [...]}`, apendando cada transação processada.
- `condominio_unidades` e `outros_pagamentos` (já são listas): incluir `"tipoLancamento": t.get("Tipo do lançamento")` em cada item apendado.
- `to_dict()`: incluir os novos campos/listas na serialização, ordenando `transacoes` por data (mesma ordem em que aparecem no CSV, que já é cronológica).
- Se a coluna "Tipo do lançamento" vier vazia para alguma transação (extratos antigos, ou linha sem anotação manual), usar string vazia (`""`) como valor — a UI trata isso ocultando a linha de tipo de lançamento para aquela transação específica (não quebra o layout nem mostra "undefined").

### 4. Template Angular: lista aninhada sempre visível dentro do painel do bloco
Dentro de cada `mat-expansion-panel` de Cobranças/Pix/Taxas, para cada pagador/destinatário/subcategoria, renderizar a linha agregada (nome, qtd, total) já existente e, logo abaixo dela, a lista de `transacoes` (uma sub-lista simples, sem `mat-expansion-panel` aninhado) com data, valor e tipo de lançamento — reaproveitando a classe `.linha` já usada em `condominioUnidades`/`outrosPagamentos`, com um estilo levemente recuado/secundário para diferenciar do agregado. Isso evita introduzir um segundo padrão de accordion aninhado (mais complexo e mais cliques) e mantém consistência visual com o resto da tela.

**Alternativa considerada**: `mat-expansion-panel` aninhado por pagador/destinatário (accordion dentro de accordion). Rejeitada explicitamente pelo usuário — quer o detalhe visível assim que o bloco principal é aberto, sem clique extra.

## Risks / Trade-offs

- [Risco] Listas de transações por pagador/destinatário podem ficar longas (ex.: "LORENA MARIA..." tem 19 transações de Pix no período), tornando o bloco "Pix enviados" bem mais extenso ao expandir → Mitigação: aceito conscientemente — é exatamente o detalhamento que o usuário pediu; nenhuma paginação/colapso adicional é necessária para o volume atual de dados (dezenas de transações por mês).
- [Risco] Mudar a forma de `cobrancas`/`pixSaidas`/`taxas.boleto`/`taxas.asaas` no JSON é uma mudança de schema interna → Mitigação: os campos agregados existentes (`qtd`, `total`) não mudam de nome nem de tipo, só ganham um campo `transacoes` a mais; `dashboard-overview-page` não lê `transacoes` em nenhum lugar, então não é afetada.
- [Risco] A coluna "Tipo do lançamento" é preenchida manualmente pelo usuário no extrato — pode ficar vazia ou inconsistente em meses anteriores/futuros → Mitigação: tratada como opcional (string vazia oculta a linha), conforme decisão 3; nenhum requisito da spec depende de "Tipo do lançamento" sempre estar preenchido.
