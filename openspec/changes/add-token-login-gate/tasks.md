## 1. Script de geração de token

- [x] 1.1 Criar `scripts/gerar_token_acesso.py` que gera um token aleatório de 32 caracteres alfanuméricos, grava em `token-acesso.txt` (raiz) e em `frontend/public/data/acesso.json` (`token`, `geradoEm`, `expiraEm` em ISO 8601 UTC, `expiraEm` = geração + 2 dias), e imprime um lembrete para rodar `scripts/publish-site.sh` e commitar/dar push; verificar rodando o script e conferindo os dois arquivos gerados
- [x] 1.2 Rodar o script duas vezes seguidas e verificar que o segundo token é diferente do primeiro e que `token-acesso.txt`/`acesso.json` refletem sempre o último gerado (sem sobras do anterior)

## 2. Serviço e modelo de acesso no Angular

- [x] 2.1 Criar `frontend/src/app/features/login/acesso.model.ts` com a interface `AcessoInfo` (`token`, `geradoEm`, `expiraEm`)
- [x] 2.2 Criar `frontend/src/app/features/login/acesso.service.ts` que carrega `data/acesso.json` via `HttpClient`, expõe um método para checar se há sessão válida (token em `localStorage` igual ao `token` atual e `expiraEm` no futuro), um método para registrar login (gravar token em `localStorage`) e um método para saber se existe um token guardado anteriormente (usado pela tela de login para decidir a mensagem inicial); verificar via `ng serve` que os dados de `acesso.json` chegam ao serviço sem erro no console

## 3. Tela de login

- [x] 3.1 Criar `frontend/src/app/features/login/login-page.ts/.html/.scss` (standalone, Angular Material: `MatFormField`/`MatInput` para o token, `MatButton` para enviar), mobile-first, consistente com o padrão visual das outras telas do app; verificar via `ng serve` que a tela renderiza sem erros no console
- [x] 3.2 Implementar a mensagem inicial condicional: se houver um token guardado em `localStorage` que não bate mais com o `acesso.json` atual, mostrar "Seu token de acesso expirou. Solicite um novo token." ao carregar a tela; caso contrário, mostrar um texto neutro pedindo o token; verificar manualmente os dois cenários (com e sem token expirado em `localStorage`)
- [x] 3.3 Implementar o envio do formulário: token correto e dentro da validade → registra sessão e navega para `/`; token que não bate com o `acesso.json` atual → mensagem "Token incorreto."; verificar manualmente os dois casos

## 4. Guard de rotas

- [x] 4.1 Criar `frontend/src/app/features/login/auth.guard.ts` (`CanActivateFn`) que usa o `AcessoService` para checar sessão válida a cada navegação e redireciona para `/login` (via `router.createUrlTree`) quando inválida
- [x] 4.2 Adicionar a rota `'login'` (`LoginPage`) em `app.routes.ts` e aplicar `canActivate: [authGuard]` nas rotas `''`, `'boletos'` e `'financeiro'`; verificar via `ng serve` que acessar `/`, `/boletos` ou `/financeiro` sem sessão válida redireciona para `/login`, e que logar com o token de `token-acesso.txt` libera as três rotas
- [x] 4.3 Verificar o cenário de expiração: gerar um `acesso.json` de teste com `expiraEm` no passado, confirmar que uma sessão antes válida é bloqueada na próxima navegação e a tela de login mostra a mensagem de expirado; restaurar o `acesso.json` real depois do teste
- [x] 4.4 Verificar o cenário de rotação: com uma sessão válida ativa, rodar o script de geração de token de novo (novo token), confirmar que a sessão antiga deixa de funcionar na próxima navegação

## 5. Verificação final e documentação

- [x] 5.1 Rodar `npm run build` dentro de `frontend/` e verificar que o build de produção conclui sem erros, incluindo o carregamento correto de `acesso.json` como asset
- [x] 5.2 Rodar `scripts/publish-site.sh`, servir a raiz do repositório localmente e confirmar que o fluxo completo (bloqueio → login → acesso liberado) funciona no build de produção da mesma forma que no `ng serve`
- [x] 5.3 Atualizar `README.md` da raiz explicando o fluxo de acesso por token: como gerar um novo token (`scripts/gerar_token_acesso.py`), que ele vale 2 dias, e que é preciso publicar (`scripts/publish-site.sh` + commit/push) para o token novo valer no site publicado
- [x] 5.4 Confirmar que `boletos.json` e `extrato-financeiro.json` permanecem com o mesmo conteúdo (diff do git não mostra mudanças nesses arquivos além do que já estava pendente antes desta change)
- [x] 5.5 Rodar `openspec validate add-token-login-gate --strict` e corrigir quaisquer erros apontados antes de considerar a change pronta para implementação
