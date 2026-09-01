## Why

Hoje as três telas do app (`/`, `/boletos`, `/financeiro`) ficam abertas para qualquer pessoa com o link — inclusive `/financeiro`, que expõe dados reais de um extrato bancário (nomes, valores de Pix, saldo). O dono do projeto quer poder controlar quem acessa essas telas sem depender de mudar a hospedagem: um token de acesso, compartilhado manualmente com as pessoas autorizadas, que expira sozinho depois de 2 dias.

## What Changes

- Nova tela de login (`/login`) que pede um token de acesso antes de liberar qualquer outra rota do app.
- Um script gera um token aleatório novo, grava em `token-acesso.txt` (raiz do repositório, já existe hoje mantido manualmente pelo dono do projeto) e em um arquivo de dados consumido pelo app (`frontend/public/data/acesso.json`), junto com o horário de expiração (geração + 2 dias).
- Um guard de rota bloqueia `/`, `/boletos` e `/financeiro`, redirecionando para `/login` sempre que não houver uma sessão válida — seja porque o usuário nunca logou, porque o token guardado expirou, ou porque o dono do projeto gerou um token novo (invalidando o antigo).
- Mensagens diferentes para "token incorreto" e "token expirado" (esse segundo caso instrui o usuário a solicitar um novo token ao dono do projeto).
- **BREAKING**: nenhuma mudança de comportamento para o dono do projeto ao rodar `npm start`/`ng serve` localmente sem token válido — ele também precisa logar; ver `design.md` para como isso é tratado em desenvolvimento.

Fora de escopo nesta change:
- Tornar o repositório GitHub privado. **Limitação de segurança aceita e documentada**: como o app é publicado a partir de arquivos commitados num repositório público, o token válido (e o horário de expiração) fica visível a qualquer pessoa que olhe o repositório no GitHub, mesmo sem passar pela tela de login. Esta change implementa um portão simples contra acesso casual pela interface do app — não é proteção real contra alguém que inspecione o código-fonte público. Essa limitação foi levantada e aceita explicitamente pelo dono do projeto.
- Logout explícito, múltiplos tokens/usuários, criptografia ou hash do token, rate limiting, recuperação de token esquecido — nenhum desses é necessário para o fluxo descrito ("o mesmo token para quem eu quiser dar acesso, válido por 2 dias, depois eu gero outro").

## Capabilities

### New Capabilities
- `login-page`: comportamento observável do portão de acesso — a tela de login, a comparação do token, as janelas de validade de 2 dias, e o bloqueio das demais telas do app até haver uma sessão válida.

### Modified Capabilities
(nenhuma — `dashboard-overview-page`, `boletos-page` e `financeiro-page` continuam com o mesmo comportamento interno; só passam a exigir uma sessão válida para serem alcançadas, o que é comportamento da nova capability `login-page`, não uma mudança nelas)

## Impact

- **Novo código**: `frontend/src/app/features/login/` (página de login, serviço de sessão) e um guard de rota aplicado em `app.routes.ts`.
- **Novo script**: gera token + expiração, escreve `token-acesso.txt` e `frontend/public/data/acesso.json`, seguindo o mesmo padrão de publicação já usado para `boletos.json`/`extrato-financeiro.json` (via `scripts/publish-site.sh`).
- **Processo operacional**: o dono do projeto passa a rodar o script de geração de token sempre que quiser abrir uma nova janela de acesso, republicar o site (`scripts/publish-site.sh` + commit/push) e reenviar o token manualmente (ex. WhatsApp) para quem deve ter acesso.
- **Sem impacto em dados existentes**: `boletos.json` e `extrato-financeiro.json` não mudam de formato ou conteúdo.
