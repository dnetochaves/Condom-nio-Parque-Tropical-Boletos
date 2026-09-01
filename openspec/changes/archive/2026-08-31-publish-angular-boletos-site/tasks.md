## 1. Script de publicação

- [x] 1.1 Criar `scripts/publish-site.sh` que roda `cd frontend && npm ci && npm run build`, verificando que o build termina sem erros
- [x] 1.2 No mesmo script, implementar a leitura do manifesto `.site-manifest.txt` (se existir) e remover da raiz do repositório exatamente os arquivos ali listados; verificar que arquivos fora do manifesto (ex. `README.md`, `frontend/`, `openspec/`, `.claude/`, os PDFs de boletos) nunca são tocados
- [x] 1.3 No script, copiar todo o conteúdo de `frontend/dist/frontend/browser/` para a raiz do repositório, e gravar em `.site-manifest.txt` a lista (caminhos relativos à raiz) de todos os arquivos recém-copiados
- [x] 1.4 Rodar o script duas vezes seguidas e verificar, via `git status`, que a segunda execução não deixa arquivos órfãos nem duplicados na raiz (idempotência)

## 2. Publicação inicial do build

- [x] 2.1 Rodar `scripts/publish-site.sh` e verificar que a raiz do repositório passa a conter `index.html` (gerado pelo Angular), os bundles JS/CSS com hash, `data/boletos.json` e o favicon, e que o `.site-manifest.txt` lista exatamente esses arquivos
- [x] 2.2 Abrir o `index.html` gerado localmente (ex. servindo a raiz do repositório com `npx http-server .` ou equivalente) e verificar visualmente que a tela de boletos carrega corretamente, sem erros no console, incluindo o carregamento de `data/boletos.json`
- [x] 2.3 Verificar que os PDFs de boletos e os demais arquivos do projeto na raiz (README.md, frontend/, openspec/, .claude/) continuam presentes e inalterados após a publicação

## 3. Migração da skill de atualização mensal

- [x] 3.1 Atualizar `.claude/skills/atualizar-boletos-mensais/scripts/extract_boletos.py` para emitir o JSON no formato `{ mes, condominio, pagador, vencimento, banco, boletos: [{ unidade, valor, documento, linhaDigitavel }] }` em vez do bloco `const boletos = [...]`, mantendo a mesma lógica de extração e ordenação já existente; verificar rodando o script sobre um PDF de exemplo já usado anteriormente e comparando o total/contagem com o resultado conhecido
- [x] 3.2 Atualizar `.claude/skills/atualizar-boletos-mensais/SKILL.md` para instruir a escrever o JSON gerado em `frontend/public/data/boletos.json` (com validação `JSON.parse`) em vez de editar `index.html`, e a rodar `scripts/publish-site.sh` como passo final antes de perguntar sobre commit/push; verificar que o passo a passo do SKILL.md não faz mais referência a editar `index.html` manualmente
- [x] 3.3 Testar a skill atualizada de ponta a ponta com o PDF de setembro/2026 já usado nas changes anteriores (ou o mais recente disponível no repositório), confirmando que `frontend/public/data/boletos.json` é atualizado corretamente e que a tela publicada localmente (via `scripts/publish-site.sh` + servidor local) reflete os dados extraídos

## 4. Publicar e verificar no Railway

- [x] 4.1 Confirmar com o usuário que os arquivos gerados na raiz (passo 2.1) estão prontos para commit, e então commitar e dar push na branch usada pelo Railway (`main`), seguindo o fluxo já usado nas changes anteriores (perguntar antes de commitar/dar push)
- [ ] 4.2 Pedir ao usuário para confirmar, pelo dashboard do Railway, que um novo deploy foi disparado após o push (esta sessão não tem acesso ao Railway do usuário para verificar isso diretamente)
- [ ] 4.3 Pedir ao usuário para abrir o link publicado (`https://condom-nio-parque-tropical-boletos-production.up.railway.app`) e confirmar visualmente que a tela Angular de boletos aparece corretamente, sem erros, e que os dados batem com o mês esperado
- [x] 4.4 Registrar no `README.md` da raiz que o link publicado agora serve o build do Angular, removendo a menção ao `index.html` estático como "site atual publicado", e documentando o fluxo de publicação (`scripts/publish-site.sh`) para futuras atualizações
