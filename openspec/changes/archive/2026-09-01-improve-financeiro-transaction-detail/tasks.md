## 1. Script de análise do extrato

- [x] 1.1 Atualizar `analisar_extrato.py` para ler a coluna com o texto descritivo de cada linha do CSV — verificar com um teste manual (`python3 analisar_extrato.py <csv> --json`) que o campo aparece no JSON de saída para transações que têm a coluna preenchida. **Achado durante a implementação**: a coluna cujo cabeçalho diz "Tipo do lançamento" na verdade contém apenas "Débito"/"Crédito"; o texto descritivo rico que o usuário quer (ex. "APORTE DMEVAL") está na coluna seguinte, que vem sem nome no CSV exportado pelo Asaas. Corrigido em `load_rows()`: a coluna sem nome logo após "Tipo do lançamento" é renomeada para "Descrição detalhada" antes do parsing, e é essa coluna que alimenta o campo `tipoLancamento` do JSON (o nome do campo público continua `tipoLancamento`, só a origem no CSV mudou).
- [x] 1.2 Transformar `cobrancas` e `pix_saidas` (hoje `{total, qtd}` por chave) para acumular também uma lista `transacoes` (`{data, valor, tipoLancamento}`) por pagador/destinatário — verificar que `to_dict()` inclui `transacoes` em cada item de `cobrancas` e `pixSaidas`, com a soma dos valores da lista batendo com o `total` agregado
- [x] 1.3 Transformar `taxas_boleto` e `taxa_asaas` (hoje contadores simples) para incluir também uma lista `transacoes` — verificar que `to_dict()` inclui `transacoes` em `taxas.boleto` e `taxas.asaas`, com a soma batendo com o `total` agregado
- [x] 1.4 Incluir `tipoLancamento` em cada item já existente de `condominio_unidades` e `outros_pagamentos` — verificar que cada item do JSON de saída para esses dois blocos tem o campo `tipoLancamento`
- [x] 1.5 Tratar transações sem a coluna de tipo de lançamento preenchida (string vazia) sem erro — verificar rodando o script sobre um CSV/linha de exemplo sem essa coluna preenchida e confirmando que não há exceção e o campo sai como string vazia

## 2. Modelo de dados do Angular

- [x] 2.1 Adicionar a interface `TransacaoDetalhe` e estender `CobrancaResumo`, `PixDestinatario` e `TaxaResumo` com o campo `transacoes: TransacaoDetalhe[]`, e adicionar `tipoLancamento: string` a `CondominioUnidade` e `OutroPagamento` em `frontend/src/app/features/dashboard/extrato.model.ts` — verificar que `ng build` compila sem erros de tipo

## 3. Regeneração dos dados publicados

- [x] 3.1 Regerar `frontend/public/data/extrato-financeiro.json` a partir do CSV mais atual do extrato (com a coluna "Tipo do lançamento" preenchida) usando o script atualizado — verificar que o JSON gerado valida contra o novo formato de `ExtratoFinanceiro` (build do Angular não falha ao carregá-lo) e que os totais agregados batem com a versão anterior do arquivo (nenhum valor financeiro muda, só a estrutura ganha os novos campos)

## 4. Template da tela Financeiro

- [x] 4.1 Atualizar o painel "Cobranças recebidas" em `dashboard-page.html` para exibir, junto de cada pagador, a lista de `transacoes` (data, valor, tipo de lançamento) sem exigir clique adicional — verificar visualmente no navegador que a lista aparece assim que o bloco é expandido
- [x] 4.2 Atualizar o painel "Pix enviados" da mesma forma, com atenção especial à apresentação (bloco mais importante da tela) — verificar visualmente no navegador que a lista de transações de cada destinatário aparece assim que o bloco é expandido, sem exigir nenhum clique adicional
- [x] 4.3 Atualizar o painel "Taxas da plataforma" para exibir a lista de `transacoes` de boleto/cartão/Pix e de mensalidade Asaas, mantendo a listagem individual de consultas Serasa como já existe hoje — verificar visualmente no navegador que as duas listas aparecem assim que o bloco é expandido
- [x] 4.4 Adicionar o texto de `tipoLancamento` a cada linha já existente dos painéis "Condomínio por unidade" e "Outros pagamentos" — verificar visualmente no navegador que cada linha mostra o tipo de lançamento
- [x] 4.5 Tratar `tipoLancamento` vazio ocultando a linha correspondente em vez de mostrar texto vazio/undefined, em todos os blocos afetados — verificar visualmente forçando uma transação sem `tipoLancamento` nos dados de teste

## 5. Estilo e validação final

- [x] 5.1 Ajustar o `.scss` da tela Financeiro para as novas listas de transação aninhadas (recuo/estilo secundário, sem rolagem horizontal, legível em ~360-430px de largura) — verificar no navegador redimensionando a viewport entre mobile e desktop
- [x] 5.2 Rodar a suíte de testes do frontend (`npm test` dentro de `frontend/`) e o build de produção (`npm run build`) e confirmar que ambos passam sem erros
