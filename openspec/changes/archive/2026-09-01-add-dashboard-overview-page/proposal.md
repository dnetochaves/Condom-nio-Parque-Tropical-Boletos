## Why

Hoje, ao abrir o app o morador cai direto na lista de boletos, e não existe nenhuma tela que dê uma visão geral e rápida da saúde financeira do condomínio (quantos boletos, quanto entrou, quanto foi pago) em números grandes e gráficos. A tela "Financeiro" atual (`/financeiro`) já mostra o extrato Asaas em detalhe, mas em formato de cards/lista, sem gráficos e sem servir como resumo executivo de entrada no app. Uma tela de Dashboard com KPIs em destaque e gráficos, como primeira tela ao abrir o app, dá ao síndico/morador um retrato imediato da situação do mês, inspirado no formato de "números em destaque + gráficos" usado por painéis como o da pesquisa salarial do Código Fonte TV (referência apenas visual, sem reaproveitar conteúdo ou dados do site).

## What Changes

- Adiciona uma nova tela de Dashboard (visão geral) com KPIs grandes em destaque (ex.: quantidade de boletos do mês, valor total de boletos, total recebido/pago no mês, total de taxas da plataforma) e ao menos um gráfico comparando categorias já existentes nos dados do extrato (ex.: cobranças por tipo, condomínio por unidade, ou pagamentos por categoria).
- A nova tela de Dashboard reaproveita os dados já carregados por `ExtratoService`/`extrato.model` (mesma fonte de dados da tela Financeiro) — nenhuma nova fonte de dados ou backend é introduzida.
- **BREAKING**: a rota raiz (`''`) do app passa a apontar para a nova tela de Dashboard, em vez da tela de Boletos. A tela de Boletos passa a viver em `/boletos`.
- O menu de navegação inferior do app passa a ter 3 ícones em vez de 2: Dashboard (novo, primeiro item), Boletos, Financeiro — mantendo os dois itens existentes e seus destinos atuais (`/boletos`, `/financeiro`).

## Capabilities

### New Capabilities
- `dashboard-overview-page`: tela de visão geral com KPIs em destaque e gráficos sobre os dados financeiros do condomínio, acessível como rota raiz do app e como novo item do menu de navegação.

### Modified Capabilities
(nenhuma — o comportamento da tela de Boletos e da tela Financeiro não muda; apenas o caminho de rota da tela de Boletos deixa de ser a raiz, o que é coberto como parte do contrato de navegação da nova capability acima)

## Impact

- `frontend/src/app/app.routes.ts`: rota raiz passa a apontar para a nova página de Dashboard; tela de Boletos ganha o path `/boletos`.
- `frontend/src/app/app.html` / `app.ts`: menu de navegação ganha um terceiro item (ícone + link) para o Dashboard.
- Novo diretório `frontend/src/app/features/dashboard-overview/` (ou nome equivalente) com o componente da nova tela, reaproveitando `ExtratoService` já existente em `frontend/src/app/features/dashboard/`.
- Possível dependência nova de biblioteca de gráficos para Angular (a ser decidida em `design.md`), adicionada ao `package.json` do frontend.
- Nenhuma mudança em backend, dados de origem (CSV/extrato) ou nas telas Boletos e Financeiro existentes além do path de rota da tela Boletos.
