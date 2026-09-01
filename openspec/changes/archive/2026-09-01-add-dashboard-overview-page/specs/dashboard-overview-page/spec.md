## Purpose

Define o comportamento observável da tela de Dashboard (visão geral): o resumo em números grandes e o gráfico que o morador/síndico vê ao abrir o app, e como essa tela se integra à navegação principal como tela inicial.

## ADDED Requirements

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

### Requirement: Gráfico comparativo de repasses por unidade
A tela de Dashboard SHALL exibir um gráfico de barras comparando o valor total repassado por unidade no período do extrato carregado (valor absoluto, já que esses lançamentos aparecem como saída no extrato), ordenado da maior para a menor unidade.

#### Scenario: Gráfico exibe uma barra por unidade
- **WHEN** a tela de Dashboard termina de carregar os dados do extrato financeiro
- **THEN** o gráfico exibe uma barra para cada unidade presente nos dados de repasse do extrato, com comprimento proporcional ao valor absoluto total repassado àquela unidade, ordenadas da maior para a menor

#### Scenario: Sem dados de repasse no período
- **WHEN** o extrato carregado não possui nenhum lançamento de repasse por unidade
- **THEN** o gráfico não é exibido e a tela mostra uma mensagem indicando que não há dados de repasse no período, sem apresentar um gráfico vazio ou quebrado

### Requirement: Indicação de carregamento
Enquanto os dados de boletos e do extrato financeiro ainda estão sendo carregados, a tela de Dashboard SHALL exibir uma indicação visual de carregamento no lugar dos números em destaque e do gráfico.

#### Scenario: Carregamento em andamento
- **WHEN** o usuário abre a tela de Dashboard e os dados ainda não terminaram de carregar
- **THEN** a tela exibe uma indicação de carregamento em vez de números incompletos, zerados ou de um gráfico vazio

### Requirement: Layout mobile-first e com sensação de aplicativo
A tela de Dashboard SHALL ser projetada e otimizada primeiro para uso em telas pequenas de celular — com espaçamento e tipografia legíveis sem necessidade de zoom, sem rolagem horizontal, e com o gráfico adaptado à largura disponível — antes de qualquer adaptação para telas maiores; e a experiência visual SHALL ser consistente com o restante do app (Angular Material, mesma paleta e componentes já usados nas telas de Boletos e Financeiro).

#### Scenario: Uso confortável em largura de tela de celular
- **WHEN** a tela de Dashboard é acessada em uma largura de viewport típica de celular (ex.: 360-430px)
- **THEN** todo o conteúdo (números em destaque e gráfico) é utilizável e legível sem rolagem horizontal e sem exigir zoom

#### Scenario: Adaptação progressiva em telas maiores
- **WHEN** a tela de Dashboard é acessada em uma largura de viewport maior (tablet/desktop)
- **THEN** o layout aproveita o espaço adicional (ex.: mais colunas de KPIs lado a lado, gráfico maior) mantendo a legibilidade e a consistência visual com o restante do app
