## 1. Estrutura da nova tela

- [x] 1.1 Criar `frontend/src/app/features/dashboard-overview/` com o componente standalone `DashboardOverviewPage` (`.ts`/`.html`/`.scss`), seguindo o padrão de `features/dashboard/dashboard-page.ts` (injeção via `inject`, dados via `toSignal`) — verificar que o projeto compila (`ng build`) com o novo componente incluído mas ainda não roteado
- [x] 1.2 Injetar `ExtratoService` e `BoletosService` no novo componente e expor um `computed()` combinando os dados de ambos — verificar via teste unitário ou console que o `computed()` retorna `null` enquanto os dados carregam e um objeto populado após o carregamento

## 2. KPIs em destaque

- [x] 2.1 Implementar o cálculo dos KPIs (quantidade de boletos do mês, valor total dos boletos do mês, total recebido no período, total de taxas) no `computed()` da página, reaproveitando os mesmos campos/fórmulas já usados em `dashboard-page.ts` para taxas — verificar com um teste unitário que os totais calculados batem com a soma manual sobre um `ExtratoFinanceiro`/`BoletosMes` de exemplo
- [x] 2.2 Renderizar os KPIs no template com `mat-card`/tipografia grande, mostrando indicação de carregamento enquanto os dados não chegam (mesmo padrão `@if (vista(); as v) { ... } @else { ... }` de `dashboard-page.html`) — verificar visualmente no navegador que os cards aparecem após o carregamento e que existe uma indicação de carregamento antes disso

## 3. Gráfico de repasses por unidade

- [x] 3.1 Implementar no `computed()` a agregação de `extrato.condominioUnidades` por `unidade` (soma do valor absoluto de `valor`, já que os lançamentos vêm negativos no extrato — são repasses/saídas, não cobranças), ordenada de forma decrescente — verificar com um teste unitário que unidades repetidas no período são somadas corretamente e a ordenação é decrescente
- [x] 3.2 Implementar o componente de gráfico de barras em CSS/SVG próprio (sem biblioteca de gráficos externa, conforme `design.md`), recebendo a lista agregada e renderizando uma barra por unidade com comprimento proporcional ao valor — verificar visualmente no navegador que as barras têm comprimento proporcional aos valores exibidos
- [x] 3.3 Implementar o estado alternativo "sem dados de repasse no período" (mensagem no lugar do gráfico) quando a lista agregada estiver vazia — verificar visualmente forçando um extrato sem `condominioUnidades`

## 4. Rotas e navegação

- [x] 4.1 Atualizar `frontend/src/app/app.routes.ts`: rota raiz (`''`) passa a apontar para `DashboardOverviewPage`; adicionar rota `'boletos'` apontando para `BoletosPage`; manter `'financeiro'` e o `redirectTo: ''` do wildcard — verificar navegando para `/`, `/boletos` e `/financeiro` no app rodando localmente e confirmando que cada rota carrega a tela correta
- [x] 4.2 Atualizar `frontend/src/app/app.html`: adicionar um terceiro item de menu (ícone + rótulo "Dashboard") apontando para `/`, antes do item de Boletos (agora apontando para `/boletos`), mantendo `routerLinkActive` em todos os itens — verificar visualmente que o menu mostra 3 itens e que o item ativo correto fica destacado em cada uma das 3 telas

## 5. Layout responsivo e validação final

- [x] 5.1 Ajustar o `.scss` da nova tela para mobile-first (sem rolagem horizontal, tipografia legível sem zoom em 360-430px de largura) com adaptação em telas maiores (mais colunas de KPIs, gráfico maior) — verificar no navegador redimensionando a viewport entre ~375px e desktop
- [x] 5.2 Rodar a suíte de testes do frontend (`npm test` dentro de `frontend/`) e o build de produção (`npm run build`) e confirmar que ambos passam sem erros
