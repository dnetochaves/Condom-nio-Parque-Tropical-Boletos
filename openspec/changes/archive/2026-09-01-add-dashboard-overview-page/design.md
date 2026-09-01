## Context

O app Angular standalone hoje tem duas telas (`BoletosPage` na rota raiz, `DashboardPage`/Financeiro em `/financeiro`) e um menu inferior fixo com 2 itens (`frontend/src/app/app.html`). Os dados financeiros já são carregados via `ExtratoService.carregar()` (retorna `ExtratoFinanceiro`, ver `extrato.model.ts`) e os boletos via `BoletosService` (retorna `BoletosMes`, ver `boleto.model.ts`). Não há biblioteca de gráficos no projeto hoje (`frontend/package.json` só tem Angular + Angular Material). Ver `proposal.md` para a motivação.

## Goals / Non-Goals

**Goals:**
- Nova tela de Dashboard como rota raiz, reaproveitando os serviços de dados já existentes.
- Um gráfico de barras simples (condomínio por unidade) e KPIs grandes, sem novas fontes de dados.
- Manter o app leve: evitar adicionar uma biblioteca de gráficos pesada para um único gráfico de barras simples.

**Non-Goals:**
- Não é objetivo deste design escolher uma biblioteca de gráficos genérica para uso futuro em outras telas — a decisão aqui é escopada ao gráfico único desta tela.
- Não cobre mudanças em `ExtratoService`/`BoletosService` além de leitura dos dados já expostos.
- Não cobre autenticação, permissões ou dados por usuário — o app continua de acesso único, como hoje.

## Decisions

### 1. Gráfico de barras sem biblioteca externa (SVG/CSS próprio)
Construir o gráfico de barras (condomínio por unidade) como um componente Angular próprio, renderizando barras via `<div>`/CSS (largura ou altura proporcional ao valor, calculada no template/computed) ou um `<svg>` simples gerado no template — sem adicionar `ngx-charts`, `chart.js`/`ng2-charts` ou similar.

**Alternativas consideradas:**
- `ngx-charts`: robusto e com temas, mas é uma dependência relativamente pesada (D3 como peer dependency) para um único gráfico de barras num app pequeno e mobile-first.
- `Chart.js` + `ng2-charts`: mais leve que ngx-charts, mas ainda introduz uma dependência de canvas e uma API de configuração própria a manter, para um caso de uso simples.
- **Escolhido**: componente próprio com barras em CSS/SVG. Justificativa: o requisito é um único gráfico de barras horizontal com poucas categorias (uma por unidade); isso é trivial de implementar com Angular puro (`@for` + estilo de largura calculado), mantém o bundle pequeno e evita acoplar a um esquema de configuração de terceiros. Se no futuro surgirem gráficos mais complexos (linhas, pizza, séries temporais), uma biblioteca pode ser reavaliada em outro change.

### 2. Estrutura de pastas e nome do componente
Criar `frontend/src/app/features/dashboard-overview/` com `dashboard-overview-page.ts/.html/.scss`, seguindo o mesmo padrão de standalone component das features existentes (`features/boletos`, `features/dashboard`). O nome evita colisão com a feature `dashboard` já existente (tela Financeiro), que não é renomeada nesta change.

### 3. Reuso dos serviços existentes
`DashboardOverviewPage` injeta `ExtratoService` (mesmo usado pela tela Financeiro) e `BoletosService` (mesmo usado pela tela de Boletos), ambos via `toSignal`, e deriva os KPIs e os dados do gráfico com `computed()`, no mesmo padrão já usado em `dashboard-page.ts`. Nenhum serviço novo é criado.

### 4. Rotas e menu
`app.routes.ts` passa a ser:
```
{ path: '', component: DashboardOverviewPage },
{ path: 'boletos', component: BoletosPage },
{ path: 'financeiro', component: DashboardPage },
{ path: '**', redirectTo: '' },
```
`app.html` ganha um terceiro `<a routerLink>` para `/` (Dashboard) antes dos itens de Boletos (agora apontando para `/boletos`) e Financeiro, mantendo o mesmo padrão de `routerLinkActive`/`mat-icon` já usado.

### 5. Cálculo dos KPIs
- Quantidade de boletos do mês: `boletosMes.boletos.length`.
- Valor total dos boletos do mês: soma de `boletosMes.boletos[].valor`.
- Total recebido no período: `extrato.totalCredito` (já calculado pelo `ExtratoService`).
- Total de taxas: `extrato.taxas.boleto.total + extrato.taxas.asaas.total + soma(extrato.taxas.serasa[].valor)` — mesmo cálculo já usado em `dashboard-page.ts` (campo `totais.taxas`).
- Dados do gráfico ("Repasses por unidade"): agregação de `extrato.condominioUnidades` por `unidade` (soma do **valor absoluto** de `valor` quando a mesma unidade aparece mais de uma vez no período), ordenada de forma decrescente pelo valor agregado. **Nota importante**: apesar do nome do campo (`condominioUnidades`), os valores desses lançamentos vêm negativos no extrato — representam repasses/saídas por unidade-torre, não cobranças recebidas. Por isso o gráfico é rotulado "Repasses por unidade" e usa valor absoluto, em vez de "condomínio pago por unidade" como cogitado inicialmente na proposta (decisão confirmada com o usuário durante a implementação).

## Risks / Trade-offs

- [Risco] Gráfico próprio em CSS/SVG tem menos recursos (animações, tooltips, acessibilidade) que uma biblioteca dedicada → Mitigação: escopo do requisito é apenas comparação visual simples entre unidades; se necessidades de acessibilidade/interatividade crescerem, reavaliar biblioteca em change futura.
- [Risco] Mudança da rota raiz é **BREAKING** para quem tenha a URL raiz do app salva esperando a tela de Boletos → Mitigação: já documentado no `proposal.md`; o redirecionamento `**` continua levando à nova raiz (Dashboard), e a tela de Boletos continua acessível via menu/`/boletos`.
- [Risco] Se `condominioUnidades` estiver vazio no período, um gráfico vazio ficaria estranho → Mitigação: já coberto pelo cenário "Sem dados de condomínio no período" no spec, que troca o gráfico por uma mensagem.
