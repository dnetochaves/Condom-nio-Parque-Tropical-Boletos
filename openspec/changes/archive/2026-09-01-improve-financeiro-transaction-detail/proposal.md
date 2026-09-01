## Why

A tela Financeiro hoje mostra, para Cobranças recebidas, Pix enviados e Taxas da plataforma, apenas totais agregados por pagador/destinatário/tipo — sem nenhuma forma de ver as transações individuais por trás desses números. Isso é especialmente limitante para Pix enviados, onde entender "para que foi cada Pix" é essencial (reformas, manutenções, aportes, repasses) e hoje só existe fora do app, olhando o CSV manualmente. O extrato passou a ter uma coluna "Tipo do lançamento" com uma descrição curada de cada transação (ex.: "REQUALIFICAÇÃO DA UNIDADE 1402 LAGOA - MÃO DE OBRA PEDREIRO..."), muito mais informativa que a descrição genérica do Asaas já usada hoje — uma oportunidade direta para fechar essa lacuna sem precisar de nova fonte de dados.

## What Changes

- Cobranças recebidas, Pix enviados e Taxas da plataforma passam a expor, dentro do painel já existente de cada bloco, a lista de transações individuais por trás do total agregado (data, valor e o texto da coluna "Tipo do lançamento"), visível ao simplesmente expandir o painel — sem nenhum botão ou clique adicional.
- Condomínio por unidade e Outros pagamentos (que já listam transações individuais) passam a exibir também o texto da coluna "Tipo do lançamento" em cada linha já existente.
- O script `analisar_extrato.py` da skill `analisar-extrato-asaas` passa a ler a coluna "Tipo do lançamento" do CSV e a incluir essa informação (agregada em listas de transações, quando aplicável) na saída `--json` consumida pelo app.
- **BREAKING** (interno ao projeto, sem consumidores externos): o formato do arquivo `frontend/public/data/extrato-financeiro.json` muda — `cobrancas`, `pixSaidas`, `taxas.boleto` e `taxas.asaas` passam a incluir uma lista de transações (`transacoes`), além dos campos agregados que já existem hoje (que são mantidos, sem mudança de forma).

## Capabilities

### New Capabilities
- `financeiro-page`: comportamento observável da tela Financeiro (extrato Asaas) — os 5 blocos de dados (Cobranças, Condomínio por unidade, Outros pagamentos, Pix enviados, Taxas) e o detalhamento por transação. Esta tela já existe em código mas nunca teve um spec principal (foi construída fora do fluxo OpenSpec), então esta é a primeira spec cobrindo tanto o comportamento já existente quanto o novo detalhamento.

### Modified Capabilities
(nenhuma — `dashboard-overview-page` consome apenas os campos agregados de `ExtratoFinanceiro`, que continuam com a mesma forma; `boletos-page` e `frontend-tooling` não são afetadas)

## Impact

- `.claude/skills/analisar-extrato-asaas/scripts/analisar_extrato.py`: passa a ler a coluna "Tipo do lançamento" e a incluir listas de transações por pagador/destinatário/subcategoria em `cobrancas`, `pixSaidas` e `taxas.boleto`/`taxas.asaas`; `condominioUnidades` e `outrosPagamentos` ganham o campo de tipo de lançamento em cada item já existente.
- `frontend/src/app/features/dashboard/extrato.model.ts`: interfaces `CobrancaResumo`, `PixDestinatario`, `TaxaResumo` (e possivelmente uma nova interface de transação individual) mudam de forma para incluir a lista de transações; `CondominioUnidade` e `OutroPagamento` ganham um novo campo.
- `frontend/src/app/features/dashboard/dashboard-page.html`/`.ts`: passam a renderizar o detalhamento por transação dentro de cada painel do accordion já existente.
- `frontend/public/data/extrato-financeiro.json`: precisa ser regerado a partir do CSV do extrato mais recente (fora do escopo desta spec de planejamento — vira uma task de implementação).
- Nenhum impacto em `boletos-page`, `dashboard-overview-page` ou no backend/hospedagem do site.
