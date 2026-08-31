# boletos-page Specification

## Purpose

Define o comportamento observável da tela de boletos dentro do app Angular: o que o morador vê e consegue fazer ao abrir a página para consultar e pagar o boleto do mês, com prioridade para uso em celular.

## Requirements

### Requirement: Cabeçalho com informações do mês
A tela SHALL exibir, em destaque no topo, o título do mês/condomínio, o nome do pagador, a data de vencimento e o banco do boleto.

#### Scenario: Informações do cabeçalho visíveis ao abrir a tela
- **WHEN** o usuário abre a tela de boletos
- **THEN** o cabeçalho mostra o mês/condomínio, o nome do pagador, a data de vencimento e o banco, sem precisar de nenhuma interação adicional

### Requirement: Resumo de quantidade e valor total
A tela SHALL exibir um resumo com a quantidade total de boletos e a soma dos valores de todos os boletos listados, formatada como moeda brasileira (R$).

#### Scenario: Resumo reflete os dados carregados
- **WHEN** a tela de boletos termina de carregar os dados
- **THEN** o resumo mostra a quantidade de boletos igual ao número de itens carregados e o valor total igual à soma dos valores de todos eles

### Requirement: Busca de boletos por unidade
A tela SHALL fornecer um campo de busca que filtra a lista de boletos por unidade em tempo real, à medida que o usuário digita.

#### Scenario: Filtrar lista digitando parte do nome da unidade
- **WHEN** o usuário digita um trecho do identificador de uma unidade no campo de busca
- **THEN** a lista exibe apenas os boletos cuja unidade contém o texto digitado (busca não sensível a maiúsculas/minúsculas)

#### Scenario: Campo de busca vazio mostra todos os boletos
- **WHEN** o campo de busca está vazio
- **THEN** todos os boletos carregados são exibidos na lista

### Requirement: Listagem de boletos com dados essenciais
A tela SHALL listar cada boleto individualmente, mostrando ao menos: identificador da unidade, valor, número do documento, data de vencimento e a linha digitável completa.

#### Scenario: Cada boleto exibe seus dados essenciais
- **WHEN** a lista de boletos é renderizada
- **THEN** cada item da lista mostra a unidade, o valor formatado como moeda, o número do documento, a data de vencimento e a linha digitável do boleto correspondente

### Requirement: Copiar linha digitável
Cada boleto listado SHALL ter uma ação de copiar que envia a linha digitável completa desse boleto para a área de transferência do dispositivo, e a tela SHALL indicar visualmente ao usuário que a cópia foi concluída.

#### Scenario: Copiar linha digitável de um boleto
- **WHEN** o usuário aciona a ação de copiar em um boleto específico
- **THEN** a linha digitável completa daquele boleto é copiada para a área de transferência do dispositivo, e a interface exibe uma confirmação visual temporária de que a cópia foi feita

#### Scenario: Confirmação visual é temporária
- **WHEN** a confirmação visual de cópia é exibida
- **THEN** ela desaparece automaticamente após um curto intervalo, voltando a ação ao estado normal, sem exigir que o usuário feche ou dispense a confirmação manualmente

### Requirement: Layout mobile-first e com sensação de aplicativo
A tela SHALL ser projetada e otimizada primeiro para uso em telas pequenas de celular — com áreas de toque adequadas, espaçamento e tipografia legíveis sem necessidade de zoom, e sem rolagem horizontal — antes de qualquer adaptação para telas maiores; e a experiência visual SHALL se assemelhar à de um aplicativo (interface densa em componentes de interação, sem aparência de documento de texto tradicional).

#### Scenario: Uso confortável em largura de tela de celular
- **WHEN** a tela de boletos é acessada em uma largura de viewport típica de celular (ex.: 360-430px)
- **THEN** todo o conteúdo (cabeçalho, resumo, busca, lista de boletos e ação de copiar) é utilizável sem rolagem horizontal e sem exigir zoom para ler texto ou tocar em controles

#### Scenario: Adaptação progressiva em telas maiores
- **WHEN** a tela de boletos é acessada em uma largura de viewport maior (tablet/desktop)
- **THEN** o layout se adapta ao espaço adicional disponível (ex.: largura máxima de conteúdo, mais respiro) sem quebrar a experiência nem exigir uma versão de código separada da versão mobile

### Requirement: Dados de boletos carregados de uma fonte de dados dedicada
A tela SHALL obter os dados dos boletos (unidade, valor, número do documento, vencimento, linha digitável) de uma fonte de dados carregada pela aplicação, e não de valores fixos misturados na lógica de apresentação da tela.

#### Scenario: Alterar os dados de origem reflete na tela
- **WHEN** os dados de boletos disponíveis para a aplicação mudam (ex.: quantidade de itens ou valores diferentes)
- **THEN** a tela exibe o novo conjunto de boletos e o resumo (quantidade/valor total) recalculado, sem exigir alteração no código dos componentes de apresentação
