## Why

A tela de Dashboard hoje tem só um gráfico (Repasses por unidade). Para um síndico/dono leigo em finanças entender rapidamente para onde está indo o dinheiro do condomínio — principalmente os Pix enviados, que hoje só aparecem detalhados dentro de um acordeão na tela Financeiro — é preciso navegar e explorar. O Dashboard, por ser a tela inicial, é o lugar certo para dar esse retrato simples e imediato, sem exigir nenhuma navegação ou interação adicional.

## What Changes

- Novo bloco "Para onde foi o dinheiro" com um gráfico de rosca (pizza) mostrando a distribuição das saídas do período em 4 categorias: Pix enviados, Repasses de condomínio, Outros pagamentos e Taxas da plataforma — com legenda em texto (cor, categoria, valor, percentual). É a visão mais simples e de mais alto nível da tela.
- Novo bloco de gráfico de barras "Pix enviados por destinatário", em posição de destaque (logo após o resumo por categoria, antes do gráfico de repasses), mostrando o valor total enviado a cada destinatário no período — o pedido central desta mudança.
- Novo bloco de gráfico de barras "Cobranças recebidas por pagador", mostrando o valor total recebido de cada pagador no período — complementa a visão de saídas com a visão de entradas, posicionado após o gráfico de repasses.
- Todo bloco de gráfico (os três novos e o já existente de repasses) passa a ter um título e uma frase curta em linguagem simples explicando o que ele mostra.
- Nenhuma mudança de comportamento no gráfico de "Repasses por unidade" já existente.

## Capabilities

### New Capabilities
(nenhuma)

### Modified Capabilities
- `dashboard-overview-page`: adiciona três novos blocos de gráfico (resumo por categoria, Pix enviados por destinatário e Cobranças recebidas por pagador) e o requisito de título + descrição simples em todo bloco de gráfico; ajusta o requisito de layout mobile-first para contemplar múltiplos gráficos em vez de um único.

## Impact

- `frontend/src/app/features/dashboard-overview/dashboard-overview-page.ts`/`.html`/`.scss`: única área de código-fonte afetada.
- Reaproveita os dados já existentes em `ExtratoFinanceiro` (`pixSaidas`, `condominioUnidades`, `outrosPagamentos`, `taxas`) — nenhuma mudança em `extrato.model.ts`, `extrato.service.ts` ou `boletos.service.ts`.
- **Fora de escopo, explicitamente**: telas de Boletos e Financeiro (código e specs `boletos-page`/`financeiro-page`) não são tocadas por esta change.
- Nenhuma nova dependência de biblioteca de gráficos (continua CSS/SVG próprio, mesma decisão já tomada para o gráfico de repasses).
