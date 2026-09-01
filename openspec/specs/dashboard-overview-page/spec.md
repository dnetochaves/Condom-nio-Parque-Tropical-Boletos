# dashboard-overview-page Specification

## Purpose

Define o comportamento observável da tela de Dashboard (visão geral): o resumo em números grandes e o gráfico que o morador/síndico vê ao abrir o app, e como essa tela se integra à navegação principal como tela inicial.

## Requirements

### Requirement: Tela de Dashboard como tela inicial do app
Ao abrir o app sem nenhum caminho específico (rota raiz), o sistema SHALL exibir a tela de Dashboard.

#### Scenario: App abre direto no Dashboard
- **WHEN** o usuário abre o app pela URL raiz, sem especificar nenhuma outra rota
- **THEN** a tela exibida é a de Dashboard, com seus números em destaque e gráfico

### Requirement: Item de Dashboard no menu de navegação
O menu de navegação principal do app SHALL exibir um item para a tela de Dashboard, além dos itens já existentes para Boletos e Financeiro, permitindo alternar entre as três telas a qualquer momento.

#### Scenario: Menu exibe os três itens de navegação
- **WHEN** o usuário está em qualquer uma das telas do app (Dashboard, Boletos ou Financeiro)
- **THEN** o menu de navegação exibe os três itens (Dashboard, Boletos, Financeiro), cada um com ícone e rótulo, e o item correspondente à tela atual aparece destacado como ativo

#### Scenario: Navegar para o Dashboard a partir de outra tela
- **WHEN** o usuário toca no item "Dashboard" do menu estando em outra tela do app
- **THEN** o app exibe a tela de Dashboard

### Requirement: Números em destaque (KPIs) do mês
A tela de Dashboard SHALL exibir, em destaque e com tipografia grande, ao menos os seguintes números calculados a partir dos dados financeiros já carregados: quantidade de boletos do mês corrente, valor total dos boletos do mês corrente, total recebido (créditos) no período do extrato carregado, e total de taxas cobradas pela plataforma (boleto + Asaas + Serasa) no período.

#### Scenario: KPIs refletem os dados carregados
- **WHEN** a tela de Dashboard termina de carregar os dados de boletos e do extrato financeiro
- **THEN** cada número em destaque mostra o valor calculado correspondente (quantidade de boletos, valor total de boletos formatado como moeda brasileira, total recebido formatado como moeda brasileira, e total de taxas formatado como moeda brasileira), sem exigir nenhuma interação adicional do usuário

### Requirement: Resumo de saídas por categoria
A tela de Dashboard SHALL exibir um bloco com um gráfico de rosca (pizza) mostrando a distribuição do total de saídas do período do extrato carregado entre as categorias Pix enviados, Repasses de condomínio, Outros pagamentos e Taxas da plataforma, acompanhado de uma legenda em texto listando, para cada categoria com valor maior que zero, seu nome, seu valor (formatado como moeda brasileira) e seu percentual do total de saídas.

#### Scenario: Resumo reflete os dados carregados
- **WHEN** a tela de Dashboard termina de carregar os dados do extrato financeiro
- **THEN** o gráfico de rosca exibe uma fatia para cada categoria com valor maior que zero, e a legenda lista cada uma dessas categorias com nome, valor e percentual

#### Scenario: Categoria sem movimentação no período
- **WHEN** uma das quatro categorias não teve nenhuma movimentação no período do extrato carregado
- **THEN** essa categoria não aparece nem no gráfico de rosca nem na legenda

#### Scenario: Nenhuma categoria com movimentação no período
- **WHEN** todas as quatro categorias estão zeradas no período do extrato carregado
- **THEN** o gráfico de rosca não é exibido e a tela mostra uma mensagem indicando que não há saídas registradas no período, sem apresentar um gráfico vazio ou quebrado

### Requirement: Gráfico de Pix enviados por destinatário
A tela de Dashboard SHALL exibir, em posição de destaque — antes do gráfico de repasses por unidade —, um bloco com um gráfico de barras comparando o valor total enviado via Pix a cada destinatário no período do extrato carregado, ordenado do maior para o menor valor enviado.

#### Scenario: Gráfico exibe uma barra por destinatário
- **WHEN** a tela de Dashboard termina de carregar os dados do extrato financeiro
- **THEN** o gráfico exibe uma barra para cada destinatário presente nos dados de Pix enviados do extrato, com comprimento proporcional ao valor total enviado a ele, ordenadas da maior para a menor

#### Scenario: Gráfico de Pix aparece antes do gráfico de repasses
- **WHEN** a tela de Dashboard é renderizada com dados de Pix enviados e de repasses por unidade
- **THEN** o bloco do gráfico de Pix enviados aparece antes do bloco do gráfico de repasses por unidade

#### Scenario: Sem dados de Pix enviados no período
- **WHEN** o extrato carregado não possui nenhuma transferência via Pix enviada no período
- **THEN** o gráfico de Pix enviados não é exibido e a tela mostra uma mensagem indicando que não há Pix enviados no período, sem apresentar um gráfico vazio ou quebrado

### Requirement: Gráfico comparativo de repasses por unidade
A tela de Dashboard SHALL exibir um gráfico de barras comparando o valor total repassado por unidade no período do extrato carregado (valor absoluto, já que esses lançamentos aparecem como saída no extrato), ordenado da maior para a menor unidade.

#### Scenario: Gráfico exibe uma barra por unidade
- **WHEN** a tela de Dashboard termina de carregar os dados do extrato financeiro
- **THEN** o gráfico exibe uma barra para cada unidade presente nos dados de repasse do extrato, com comprimento proporcional ao valor absoluto total repassado àquela unidade, ordenadas da maior para a menor

#### Scenario: Sem dados de repasse no período
- **WHEN** o extrato carregado não possui nenhum lançamento de repasse por unidade
- **THEN** o gráfico não é exibido e a tela mostra uma mensagem indicando que não há dados de repasse no período, sem apresentar um gráfico vazio ou quebrado

### Requirement: Gráfico de Cobranças recebidas por pagador
A tela de Dashboard SHALL exibir, após o gráfico de repasses por unidade, um bloco com um gráfico de barras comparando o valor total recebido de cada pagador no período do extrato carregado, ordenado do maior para o menor valor recebido.

#### Scenario: Gráfico exibe uma barra por pagador
- **WHEN** a tela de Dashboard termina de carregar os dados do extrato financeiro
- **THEN** o gráfico exibe uma barra para cada pagador presente nos dados de cobranças recebidas do extrato, com comprimento proporcional ao valor total recebido dele, ordenadas da maior para a menor

#### Scenario: Sem dados de cobranças recebidas no período
- **WHEN** o extrato carregado não possui nenhuma cobrança recebida no período
- **THEN** o gráfico de cobranças recebidas não é exibido e a tela mostra uma mensagem indicando que não há cobranças recebidas no período, sem apresentar um gráfico vazio ou quebrado

### Requirement: Título e descrição simples em cada bloco de gráfico
Cada bloco de gráfico da tela de Dashboard (resumo por categoria, Pix enviados por destinatário, repasses por unidade, cobranças recebidas por pagador) SHALL exibir um título e uma frase curta, em linguagem simples e sem jargão financeiro, explicando o que aquele gráfico mostra, pensada para um usuário sem conhecimento técnico de finanças.

#### Scenario: Bloco de gráfico com título e descrição
- **WHEN** a tela de Dashboard exibe qualquer um dos blocos de gráfico
- **THEN** esse bloco mostra um título identificando o gráfico e, abaixo dele, uma frase curta em linguagem simples explicando o que os dados representam

### Requirement: Indicação de carregamento
Enquanto os dados de boletos e do extrato financeiro ainda estão sendo carregados, a tela de Dashboard SHALL exibir uma indicação visual de carregamento no lugar dos números em destaque e do gráfico.

#### Scenario: Carregamento em andamento
- **WHEN** o usuário abre a tela de Dashboard e os dados ainda não terminaram de carregar
- **THEN** a tela exibe uma indicação de carregamento em vez de números incompletos, zerados ou de um gráfico vazio

### Requirement: Layout mobile-first e com sensação de aplicativo
A tela de Dashboard SHALL ser projetada e otimizada primeiro para uso em telas pequenas de celular — com espaçamento e tipografia legíveis sem necessidade de zoom, sem rolagem horizontal, e com todos os gráficos adaptados à largura disponível — antes de qualquer adaptação para telas maiores; e a experiência visual SHALL ser consistente com o restante do app (Angular Material, mesma paleta e componentes já usados nas telas de Boletos e Financeiro).

#### Scenario: Uso confortável em largura de tela de celular
- **WHEN** a tela de Dashboard é acessada em uma largura de viewport típica de celular (ex.: 360-430px)
- **THEN** todo o conteúdo (números em destaque e todos os blocos de gráfico) é utilizável e legível sem rolagem horizontal e sem exigir zoom

#### Scenario: Adaptação progressiva em telas maiores
- **WHEN** a tela de Dashboard é acessada em uma largura de viewport maior (tablet/desktop)
- **THEN** o layout aproveita o espaço adicional (ex.: mais colunas de KPIs lado a lado, blocos de gráfico maiores ou lado a lado) mantendo a legibilidade e a consistência visual com o restante do app
