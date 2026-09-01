## Purpose

Define o comportamento observável do portão de acesso por token: o que a tela de login exige, quando ela libera ou bloqueia as demais telas do app, e como a validade de 2 dias e a troca de token se refletem para quem está tentando entrar.

## ADDED Requirements

### Requirement: Acesso às telas do app exige sessão válida
Nenhuma tela do app (visão geral, boletos, financeiro) SHALL ser alcançável sem uma sessão válida; qualquer tentativa de navegação sem sessão válida SHALL ser redirecionada para a tela de login.

#### Scenario: Acessar o app sem ter logado antes
- **WHEN** um usuário sem sessão válida acessa qualquer URL do app diferente da tela de login
- **THEN** ele é redirecionado para a tela de login antes de ver qualquer conteúdo das outras telas

#### Scenario: Sessão válida permite navegar livremente
- **WHEN** um usuário com sessão válida navega entre as telas do app
- **THEN** ele acessa cada tela normalmente, sem ser solicitado a logar de novo

### Requirement: Login por comparação de token
A tela de login SHALL pedir um token de acesso em texto e SHALL conceder sessão válida quando o token informado for exatamente igual ao token de acesso vigente e esse token ainda estiver dentro da janela de validade.

#### Scenario: Token correto e dentro da validade
- **WHEN** o usuário informa o token de acesso vigente, antes de expirar
- **THEN** o sistema concede sessão válida e o usuário passa a acessar as demais telas

#### Scenario: Token incorreto
- **WHEN** o usuário informa um token diferente do token de acesso vigente
- **THEN** o sistema não concede sessão e exibe uma mensagem informando que o token está incorreto

### Requirement: Token expira 2 dias após ser gerado
Cada token de acesso gerado SHALL deixar de ser aceito exatamente 2 dias após o momento em que foi gerado, mesmo que o texto do token continue sendo o mesmo que já foi distribuído.

#### Scenario: Token correto, porém expirado
- **WHEN** o usuário informa um token que é igual ao último token gerado, mas já se passaram mais de 2 dias desde a geração desse token
- **THEN** o sistema não concede sessão e exibe uma mensagem distinta informando que o token expirou e que é preciso solicitar um novo

#### Scenario: Sessão ativa expira durante o uso
- **WHEN** um usuário com sessão válida continua navegando pelo app depois que os 2 dias de validade do token usado para logar se esgotam
- **THEN** a próxima navegação para qualquer tela redireciona o usuário para a tela de login, com a mensagem de token expirado

### Requirement: Gerar um novo token invalida o anterior
Ao gerar um novo token de acesso, o token anterior SHALL deixar de conceder sessão, mesmo que ainda estivesse dentro da janela de 2 dias.

#### Scenario: Novo token gerado antes do anterior expirar
- **WHEN** o dono do projeto gera um novo token de acesso antes de o token anterior completar 2 dias
- **THEN** tentativas de login ou de navegação usando o token anterior deixam de conceder sessão, e apenas o novo token passa a ser aceito
