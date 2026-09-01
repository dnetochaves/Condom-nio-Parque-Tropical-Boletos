## Context

A tela de Dashboard (`frontend/src/app/features/dashboard-overview/dashboard-overview-page.ts`/`.html`/`.scss`) já carrega `ExtratoFinanceiro` via `ExtratoService` (mesmo serviço usado pela tela Financeiro) e `BoletosMes` via `BoletosService`, e já tem um gráfico de barras próprio (CSS, sem biblioteca) para "Repasses por unidade" (`agregarRepassesPorUnidade`, a partir de `extrato.condominioUnidades`). Ver `proposal.md` para a motivação; ver `specs/dashboard-overview-page/spec.md` para o comportamento alvo.

Dados relevantes já disponíveis em `ExtratoFinanceiro` (sem nenhuma mudança nesta change):
- `pixSaidas: PixDestinatario[]` — já agregado por destinatário (`total`, `qtd`), com `total` negativo, e já vem ordenado do maior para o menor valor absoluto (`sorted(..., key=lambda kv: kv[1]["total"])` no script Python, ascendente sobre valores negativos = maior magnitude primeiro).
- `condominioUnidades` — usado pelo gráfico de repasses já existente.
- `outrosPagamentos: OutroPagamento[]` — lista de transações individuais, valores negativos.
- `taxas.boleto.total` / `taxas.asaas.total` / `taxas.serasa[].valor` — já somados hoje no KPI `totalTaxas`.

## Goals / Non-Goals

**Goals:**
- Dar ao usuário leigo uma visão simples e imediata de para onde vai o dinheiro do condomínio, com ênfase em Pix enviados, na própria tela inicial.
- Reaproveitar 100% dos dados já carregados — nenhuma mudança em `ExtratoFinanceiro`, `ExtratoService`, `BoletosService`.
- Manter a mesma abordagem de gráficos sem biblioteca externa (CSS/SVG próprio) já estabelecida.

**Non-Goals:**
- Não cobre nenhuma mudança nas telas de Boletos ou Financeiro, nem em seus specs (`boletos-page`, `financeiro-page`) — escopo travado à `dashboard-overview-page`.
- Não introduz drill-down/interatividade nos gráficos (clicar numa fatia/barra para ver detalhe) — mantém a tela como visão consolidada e simples; detalhe por transação já existe na tela Financeiro.

## Decisions

### 1. Gráfico de rosca em CSS puro (`conic-gradient`), sem biblioteca
Implementar o gráfico de "Resumo de saídas por categoria" como um único elemento com `background: conic-gradient(...)` calculado a partir dos percentuais de cada categoria (cor por categoria), `border-radius: 50%`, acompanhado de uma legenda HTML em texto (lista de `<li>` com um quadrado colorido, nome da categoria, valor e percentual) logo abaixo/ao lado.

**Alternativas consideradas:**
- SVG com `<path>` de arco calculado via trigonometria: mais preciso e mais fácil de tornar interativo no futuro, mas exige mais código (cálculo de ângulos/pontos) para um ganho visual mínimo neste caso.
- Biblioteca de gráficos (`ngx-charts`/`Chart.js`): rejeitada pela mesma razão já documentada na change anterior — bundle maior para um app pequeno, e aqui o caso de uso (uma rosca de 4 fatias) é simples o suficiente para não justificar a dependência.
- **Escolhido**: `conic-gradient` + legenda em texto. A legenda em texto garante que a informação (valor e percentual) fique acessível/legível mesmo sem depender só da cor, o que é importante para o usuário leigo e para acessibilidade.

### 2. Cores das categorias
Usar 4 cores distintas, uma por categoria (Pix enviados, Repasses de condomínio, Outros pagamentos, Taxas da plataforma), fixas (não recalculadas dinamicamente) para que o usuário associe rapidamente cor → categoria ao longo do tempo. Taxas usa `--mat-sys-error`. Para as outras três, na implementação real, `--mat-sys-primary` e `--mat-sys-tertiary` deste tema se revelaram dois tons de azul muito parecidos entre si (verificado visualmente) — problemático justamente para o usuário leigo que a spec pede para priorizar. Por isso as cores de Pix, Repasses e Outros usam valores fixos escolhidos para máxima distinção categórica (azul, verde e âmbar), expressos com `light-dark(...)` para continuar respeitando tema claro/escuro, em vez dos tokens semânticos do Material.

### 3. Os três gráficos de barra reaproveitam o mesmo padrão visual
Os blocos "Pix enviados por destinatário", "Repasses por unidade" e "Cobranças recebidas por pagador" usam a mesma estrutura HTML/CSS (barra horizontal com rótulo, valor e trilha preenchida proporcionalmente) — modelada como um array de blocos (`{ titulo, descricao, itens, maiorValor, mensagemVazia }`) percorrido por um único `@for` no template, em vez de repetir a marcação três vezes. A ordem dos itens desse array define a ordem de exibição dos blocos na tela: Pix enviados primeiro (destaque pedido pelo usuário), depois Repasses por unidade, depois Cobranças recebidas.

Fonte dos dados de cada bloco:
- Pix enviados: `extrato.pixSaidas` (já agregado por destinatário), mapeando `{ rotulo: destinatario, valor: Math.abs(total) }` — já vem ordenado do JSON, sem necessidade de agregação adicional.
- Repasses por unidade: `agregarRepassesPorUnidade(extrato.condominioUnidades)` (já existente, sem mudança).
- Cobranças recebidas: `extrato.cobrancas` (já agregado por pagador), mapeando `{ rotulo: pagador, valor: total }` — os valores já são positivos (dinheiro recebido), então não precisa de `Math.abs`; a lista já vem ordenada do maior para o menor total no JSON (`sorted(..., key=lambda kv: -kv[1]["total"])` no script Python).

### 4. Gráfico de "Cobranças recebidas" incluído, posicionado após Repasses por unidade
Revisitando a decisão inicial: o usuário pediu explicitamente para incluir também um gráfico de cobranças recebidas, complementando a visão de saídas com a visão de entradas. Ele é posicionado por último entre os três gráficos de barra (depois de Pix enviados e Repasses por unidade), já que o pedido original do usuário continua sendo mais focado nas saídas — Pix enviados mantém o destaque como primeiro bloco de gráfico de barra da tela.

### 5. Cálculo das 4 categorias do resumo
- Pix enviados: soma de `Math.abs(pixSaidas[].total)`.
- Repasses de condomínio: soma de `Math.abs(condominioUnidades[].valor)` (mesma soma usada implicitamente pelo gráfico de repasses, mas somada em vez de por unidade).
- Outros pagamentos: soma de `Math.abs(outrosPagamentos[].valor)`.
- Taxas da plataforma: reaproveita o cálculo já existente do KPI `kpis.totalTaxas` (`taxas.boleto.total + taxas.asaas.total + soma(taxas.serasa[].valor)`), em valor absoluto.
- O percentual de cada categoria é `valorCategoria / somaDasQuatroCategorias`. Nota: essa soma tende a ficar próxima de `Math.abs(extrato.totalDebito)`, mas não precisa bater exatamente (o extrato pode ter outros tipos de transação não cobertos por nenhuma das 4 categorias, já tratados à parte na tela Financeiro como "Outros tipos de transação" — esses ficam de fora do resumo de saídas por categoria, por não se encaixarem em nenhuma das 4 categorias).

## Risks / Trade-offs

- [Risco] `conic-gradient` com muitas cores hardcoded pode ficar pouco legível se uma categoria tiver percentual muito pequeno (fatia quase invisível) → Mitigação: a legenda em texto sempre lista o valor e percentual exato, então a informação não depende só de enxergar a fatia.
- [Risco] Adicionar 3 novos blocos de gráfico deixa a tela de Dashboard mais longa (mais rolagem vertical) → Mitigação: aceito conscientemente — é exatamente o que foi pedido (mais gráficos, em blocos); cada bloco é independente e simples de entender rapidamente ao rolar.
- [Risco] Se a soma das 4 categorias for zero mas `totalDebito` não for (transações fora das 4 categorias) → Mitigação: o requisito trata esse caso somando apenas as 4 categorias entre si (100% do gráfico é sempre a soma dessas 4, não do total geral de saídas do extrato); documentado na Decisão 5 para não gerar confusão de "não bate com o total".
