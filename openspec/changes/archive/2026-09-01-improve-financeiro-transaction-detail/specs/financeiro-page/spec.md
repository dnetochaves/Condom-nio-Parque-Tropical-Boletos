## Purpose

Define o comportamento observável da tela Financeiro (extrato Asaas): o resumo do período, os cinco blocos de dados financeiros do condomínio e o detalhamento por transação dentro de cada um deles.

## ADDED Requirements

### Requirement: Resumo do período
A tela Financeiro SHALL exibir, em destaque, o saldo inicial, o saldo final, a variação no período, o total de entradas (créditos), o total de saídas (débitos) e a quantidade de transações do extrato carregado.

#### Scenario: Resumo reflete os dados carregados
- **WHEN** a tela Financeiro termina de carregar o extrato
- **THEN** o resumo mostra saldo inicial, saldo final, variação, entradas, saídas e quantidade de transações, todos os valores monetários formatados como moeda brasileira (R$)

### Requirement: Cobranças recebidas com detalhamento por transação
A tela Financeiro SHALL exibir o total recebido e a quantidade de cobranças agrupadas por pagador, e SHALL exibir, junto de cada pagador, a lista das transações individuais daquele pagador (data, valor e o texto descritivo do tipo de lançamento) — visível assim que o bloco "Cobranças recebidas" é expandido, sem exigir nenhuma outra ação (ex.: um segundo clique por pagador).

#### Scenario: Total por pagador visível ao abrir o bloco
- **WHEN** o usuário expande o bloco "Cobranças recebidas"
- **THEN** a tela lista cada pagador com a quantidade de cobranças e o total recebido dele

#### Scenario: Detalhamento por transação já visível junto do pagador
- **WHEN** o usuário expande o bloco "Cobranças recebidas"
- **THEN** a tela já mostra, junto de cada pagador, cada cobrança individual dele com data, valor e o texto descritivo do tipo de lançamento, sem exigir nenhum clique ou botão adicional além de ter expandido o bloco

### Requirement: Condomínio por unidade com tipo de lançamento
A tela Financeiro SHALL exibir a lista de pagamentos de condomínio por unidade, e cada item da lista SHALL incluir a data, a unidade, o valor e o texto descritivo do tipo de lançamento daquela transação.

#### Scenario: Cada linha mostra o tipo de lançamento
- **WHEN** o usuário expande o bloco "Condomínio por unidade"
- **THEN** cada linha da lista mostra a data, a unidade, o valor e o texto descritivo do tipo de lançamento correspondente àquela transação

### Requirement: Outros pagamentos com tipo de lançamento
Quando houver outros pagamentos de conta no período (que não são taxa de condomínio), a tela Financeiro SHALL exibir a lista desses pagamentos, e cada item SHALL incluir a data, a descrição, o valor e o texto descritivo do tipo de lançamento daquela transação.

#### Scenario: Cada linha mostra o tipo de lançamento
- **WHEN** existem outros pagamentos no extrato carregado e o usuário expande o bloco "Outros pagamentos"
- **THEN** cada linha da lista mostra a data, a descrição, o valor e o texto descritivo do tipo de lançamento correspondente àquela transação

#### Scenario: Bloco ausente quando não há outros pagamentos
- **WHEN** o extrato carregado não possui nenhum outro pagamento de conta
- **THEN** o bloco "Outros pagamentos" não é exibido

### Requirement: Pix enviados com detalhamento por transação
A tela Financeiro SHALL exibir o total enviado e a quantidade de transferências Pix agrupadas por destinatário, e SHALL exibir, junto de cada destinatário, a lista das transferências individuais para aquele destinatário (data, valor e o texto descritivo do tipo de lançamento) — visível assim que o bloco "Pix enviados" é expandido, sem exigir nenhuma outra ação (ex.: um segundo clique por destinatário). Este é o bloco de maior atenção da tela: o detalhamento por transação SHALL estar sempre visível junto do destinatário, nunca escondido atrás de uma segunda camada de interação.

#### Scenario: Total por destinatário visível ao abrir o bloco
- **WHEN** o usuário expande o bloco "Pix enviados"
- **THEN** a tela lista cada destinatário com a quantidade de transferências e o total enviado a ele

#### Scenario: Detalhamento por transação já visível junto do destinatário
- **WHEN** o usuário expande o bloco "Pix enviados"
- **THEN** a tela já mostra, junto de cada destinatário, cada transferência individual para ele com data, valor e o texto descritivo do tipo de lançamento, sem exigir nenhum clique ou botão adicional além de ter expandido o bloco

### Requirement: Taxas da plataforma com detalhamento por transação
A tela Financeiro SHALL exibir o total de taxas de boleto/cartão/Pix e o total da mensalidade do plano Asaas, e SHALL exibir, junto de cada uma dessas subcategorias, a lista das transações individuais correspondentes (data, valor e o texto descritivo do tipo de lançamento) — visível assim que o bloco "Taxas da plataforma" é expandido, sem exigir nenhuma ação adicional. Consultas ao Serasa continuam listadas individualmente, uma por linha.

#### Scenario: Detalhamento de taxas de boleto/cartão/Pix já visível
- **WHEN** o usuário expande o bloco "Taxas da plataforma"
- **THEN** a tela já mostra a lista das transações individuais de taxa de boleto/cartão/Pix, cada uma com data, valor e o texto descritivo do tipo de lançamento, sem exigir nenhuma ação adicional

#### Scenario: Detalhamento da mensalidade do plano Asaas já visível
- **WHEN** o usuário expande o bloco "Taxas da plataforma"
- **THEN** a tela já mostra a lista das transações individuais de mensalidade do plano Asaas, cada uma com data, valor e o texto descritivo do tipo de lançamento, sem exigir nenhuma ação adicional

### Requirement: Blocos condicionais de exceção
Quando houver transações de um tipo não reconhecido pelas categorias anteriores, a tela Financeiro SHALL exibir um bloco "Outros tipos de transação"; quando houver transações estornadas no período, a tela SHALL exibir um bloco de alerta com as transações estornadas. Ambos os blocos SHALL ficar ocultos quando não houver dados correspondentes.

#### Scenario: Bloco de outros tipos aparece só quando há dados
- **WHEN** o extrato carregado contém um tipo de transação não mapeado pelas categorias padrão
- **THEN** a tela exibe o bloco "Outros tipos de transação" com esse(s) tipo(s)

#### Scenario: Bloco de estornos aparece só quando há dados
- **WHEN** o extrato carregado contém ao menos uma transação marcada como estornada
- **THEN** a tela exibe um bloco de alerta listando as transações estornadas

### Requirement: Tipo de lançamento ausente não quebra a exibição
Quando uma transação não tiver o texto de tipo de lançamento preenchido, a tela Financeiro SHALL exibir normalmente a data e o valor daquela transação, sem mostrar texto vazio, "undefined" ou qualquer indicação quebrada no lugar do tipo de lançamento.

#### Scenario: Transação sem tipo de lançamento
- **WHEN** uma transação individual de qualquer bloco não possui texto de tipo de lançamento no extrato carregado
- **THEN** a linha dessa transação mostra normalmente data e valor, e simplesmente omite o texto de tipo de lançamento

### Requirement: Layout mobile-first e com sensação de aplicativo
A tela Financeiro SHALL ser projetada e otimizada primeiro para uso em telas pequenas de celular — com espaçamento e tipografia legíveis sem necessidade de zoom e sem rolagem horizontal, inclusive nas listas de detalhamento por transação — antes de qualquer adaptação para telas maiores; e a experiência visual SHALL ser consistente com o restante do app (Angular Material, mesma paleta e componentes já usados nas telas de Boletos e Dashboard).

#### Scenario: Uso confortável em largura de tela de celular
- **WHEN** a tela Financeiro, incluindo o detalhamento por transação de qualquer bloco, é acessada em uma largura de viewport típica de celular (ex.: 360-430px)
- **THEN** todo o conteúdo é utilizável e legível sem rolagem horizontal e sem exigir zoom
