## Context

O app é uma SPA Angular publicada como arquivos estáticos commitados na raiz do repositório (ver capability `frontend-tooling` e o script `scripts/publish-site.sh`), servida pelo Railway. Não há backend. O repositório GitHub é público — decisão já discutida e aceita com o dono do projeto (ver `proposal.md`). Hoje já existe um `token-acesso.txt` na raiz, mantido manualmente, e o padrão do projeto para "dado processado que o Angular consome" é um JSON em `frontend/public/data/` (ver `boletos.json`, `extrato-financeiro.json`).

## Goals / Non-Goals

**Goals:**
- Bloquear as 3 rotas existentes atrás de uma tela de login simples, sem backend.
- Token com validade de exatamente 2 dias a partir da geração, e invalidado imediatamente se um novo token for gerado antes disso.
- Mensagens distintas para "token errado" e "token expirado".

**Non-Goals:**
- Confidencialidade real do token (ver limitação aceita no `proposal.md`) — este design não tenta mitigar isso, só documenta.
- Preservar a URL originalmente pedida para redirecionar de volta após o login (login sempre leva para `/`) — simplificação deliberada.
- Bypass de login em modo de desenvolvimento local (`ng serve`) — o dono do projeto usa o mesmo fluxo de login, lendo o token em `token-acesso.txt`; não vale a complexidade de uma flag de ambiente só para isso.

## Decisions

### Token gerado por script Python, formato e validade
`scripts/gerar_token_acesso.py` gera uma string aleatória de 32 caracteres alfanuméricos (`secrets.choice` sobre letras+dígitos — mesmo formato do token de exemplo que o usuário já colocou em `token-acesso.txt`), grava esse token em `token-acesso.txt` (sobrescrevendo) e em `frontend/public/data/acesso.json`:
```json
{ "token": "...", "geradoEm": "2026-08-31T18:00:00+00:00", "expiraEm": "2026-09-02T18:00:00+00:00" }
```
- **Alternativa considerada**: guardar só o token em `token-acesso.txt` e calcular a expiração a partir da data de modificação do arquivo (`mtime`). Rejeitada porque `mtime` muda com qualquer operação de filesystem (checkout do git, cópia, etc.), não é uma fonte confiável de "quando o token foi realmente gerado".
- `geradoEm`/`expiraEm` em ISO 8601 com timezone (UTC) evita ambiguidade ao comparar com `new Date()` no navegador do usuário, que pode estar em qualquer fuso.
- O script só é responsável por gerar os arquivos; publicar (`scripts/publish-site.sh`) e commitar/dar push continuam sendo passos manuais separados, como já acontece para atualização de boletos e extrato — consistente com o resto do projeto.

### AcessoService carrega `acesso.json`, guard revalida a cada navegação
Um `AcessoService` (mesmo padrão de `BoletosService`/`ExtratoService`: `HttpClient.get` + `shareReplay(1)`) carrega `data/acesso.json`. Um guard funcional (`authGuard`, `CanActivateFn`) aplicado às rotas `''`, `'boletos'` e `'financeiro'` busca o `acesso.json` atual a cada navegação e compara com o token guardado em `localStorage`:
- sessão válida somente se `localStorage` tiver um token igual ao `token` atual de `acesso.json` **e** `agora < expiraEm`.
- caso contrário, redireciona para `/login` (via `router.createUrlTree`, não navegação imperativa, para funcionar corretamente com guards assíncronos).
- **Por que revalidar a cada navegação, e não só uma vez no login**: é assim que a expiração e a troca de token pelo dono do projeto derrubam sessões automaticamente, sem precisar de nenhum mecanismo de push/notificação — a próxima navegação já pega a mudança, porque `acesso.json` é buscado de novo (a chamada HTTP tem cache via `shareReplay`, mas o navegador revalida o arquivo estático a cada carregamento de página / o service singleton é recriado a cada bootstrap da aplicação, que é o que acontece a cada visita).

### Mensagens de erro decididas pelo estado observado no `localStorage`, sem passar estado pela navegação
A tela de login, ao carregar, verifica se já existe um token guardado em `localStorage`:
- se existir um token guardado que não bate mais com o `acesso.json` atual (seja porque expirou, seja porque foi trocado) → mensagem inicial "Seu token de acesso expirou. Solicite um novo token."
- se não existir nenhum token guardado → mensagem inicial neutra pedindo o token, sem alarme.
- ao submeter o formulário: se o token digitado não bate com o `token` atual de `acesso.json` → mensagem "Token incorreto." (mesmo que não seja logicamente distinguível de "token antigo que já foi trocado" do ponto de vista do usuário, o texto da mensagem é sobre o que ele acabou de digitar, não sobre o estado anterior de sessão).
- **Alternativa considerada**: guard passar um `queryParam`/`router state` tipo `?motivo=expirado` ao redirecionar. Rejeitada por adicionar uma superfície a mais (estado de navegação) para o mesmo resultado que já dá para inferir só olhando `localStorage` — mais simples manter a lógica de mensagem inteiramente dentro da tela de login.

### Sem hashing, sem HTTPS extra, sem rate limiting
Comparação de string simples (`token digitado === acesso.token`) — deliberado, dado que o próprio token já fica visível em texto puro no repositório público (ver limitação aceita). Adicionar hash/criptografia aqui não protegeria nada a mais, só adicionaria complexidade sem ganho real de segurança, contrariando o pedido explícito de simplicidade.

## Risks / Trade-offs

- [Token e expiração ficam visíveis a qualquer um que abra o repositório público no GitHub, então o "portão" não impede acesso de alguém tecnicamente capaz] → Mitigação: nenhuma nesta change — é uma limitação aceita e documentada (ver `proposal.md`); a alternativa (tornar o repo privado) foi oferecida e recusada pelo dono do projeto.
- [`localStorage` é por navegador/dispositivo — um usuário que troca de navegador ou limpa dados precisa logar de novo, mesmo dentro da janela de 2 dias] → Aceitável: o token continua o mesmo e válido, então ele só precisa digitá-lo de novo, sem precisar de um token novo.
- [Se o dono do projeto esquecer de rodar `scripts/publish-site.sh` depois de gerar um novo token, o site publicado continua servindo o `acesso.json` antigo, e o token novo que ele está distribuindo ainda não funciona] → Mitigação: o script de geração imprime um lembrete explícito no terminal para rodar a publicação e o commit/push depois.
