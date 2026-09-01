## 1. Cálculo dos dados dos novos gráficos

- [x] 1.1 No `computed()` de `dashboard-overview-page.ts`, calcular as 4 categorias de saída (Pix enviados, Repasses de condomínio, Outros pagamentos, Taxas da plataforma) com valor absoluto e percentual sobre a soma das 4 — verificar com um teste unitário que os valores batem com a soma manual sobre um `ExtratoFinanceiro` de exemplo e que os percentuais somam 100% quando as 4 categorias têm valor
- [x] 1.2 Mapear `extrato.pixSaidas` para a lista `{ rotulo, valor }` usada pelo gráfico de barras (valor absoluto, já vem ordenado do JSON) — verificar com um teste unitário que a lista resultante tem um item por destinatário com o valor absoluto correto
- [x] 1.3 Mapear `extrato.cobrancas` para a lista `{ rotulo, valor }` usada pelo gráfico de barras (valor já positivo, já vem ordenado do JSON) — verificar com um teste unitário que a lista resultante tem um item por pagador com o valor correto
- [x] 1.4 Tratar os casos de categoria zerada (omitida do resumo) e de todas as 4 categorias zeradas (lista vazia) — verificar com testes unitários os dois casos

## 2. Componente reaproveitável de gráfico de barras

- [x] 2.1 Extrair a marcação/estilo do gráfico de barras já existente (usado hoje só por "Repasses por unidade") para um padrão reaproveitável dentro do componente — um array de blocos (`{ titulo, descricao, itens, maiorValor, mensagemVazia }`) percorrido por um único `@for`, sem duplicar HTML/CSS entre os três gráficos de barra (Pix, Repasses, Cobranças) — verificar que `ng build` compila e que o gráfico de repasses continua renderizando exatamente como antes (mesma estrutura visual)

## 3. Bloco "Resumo de saídas por categoria" (gráfico de rosca)

- [x] 3.1 Implementar o gráfico de rosca em CSS (`conic-gradient`) a partir das 4 categorias calculadas, com cores fixas por categoria — verificar visualmente no navegador que a rosca reflete os percentuais calculados. **Achado durante a implementação**: as cores originalmente propostas no design (`--mat-sys-primary` e `--mat-sys-tertiary`) são dois tons de azul quase indistinguíveis neste tema — trocadas por 4 cores fixas categoricamente distintas (azul, verde, âmbar, vermelho), documentado em `design.md`
- [x] 3.2 Implementar a legenda em texto (cor, nome da categoria, valor formatado em R$, percentual) abaixo/ao lado da rosca — verificar visualmente que a legenda lista só as categorias com valor maior que zero
- [x] 3.3 Implementar o estado "nenhuma categoria com movimentação" (mensagem no lugar da rosca) — verificar visualmente forçando um extrato com as 4 categorias zeradas
- [x] 3.4 Adicionar título e frase curta explicando o gráfico, em linguagem simples — verificar visualmente

## 4. Blocos de gráfico de barra: Pix enviados, Repasses por unidade e Cobranças recebidas

- [x] 4.1 Montar o array de blocos de barra (task 2.1) na ordem: Pix enviados, Repasses por unidade, Cobranças recebidas — verificar visualmente no navegador que a ordem exibida na tela é essa
- [x] 4.2 Implementar o estado "sem dados" de cada bloco (mensagem no lugar do gráfico quando a lista de itens está vazia) — verificar visualmente forçando um extrato sem `pixSaidas`, sem `condominioUnidades` e sem `cobrancas`, um de cada vez
- [x] 4.3 Adicionar título e frase curta explicando cada um dos três gráficos, em linguagem simples — verificar visualmente que os três blocos têm título e descrição consistentes entre si

## 5. Estilo, responsividade e validação final

- [x] 5.1 Ajustar o `.scss` da tela para os novos blocos (rosca + legenda, espaçamento entre os 4 blocos de gráfico), mobile-first, sem rolagem horizontal, com adaptação em telas maiores — verificar no navegador redimensionando a viewport entre mobile e desktop
- [x] 5.2 Confirmar visualmente que nenhum arquivo fora de `frontend/src/app/features/dashboard-overview/` foi alterado (`git status`/`git diff` restrito a essa pasta, exceto os artefatos OpenSpec desta change)
- [x] 5.3 Rodar a suíte de testes do frontend (`npm test` dentro de `frontend/`) e o build de produção (`npm run build`) e confirmar que ambos passam sem erros
