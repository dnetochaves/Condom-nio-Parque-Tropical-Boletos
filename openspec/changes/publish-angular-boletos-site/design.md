## Context

Hoje o link publicado (`https://condom-nio-parque-tropical-boletos-production.up.railway.app`) é servido pelo Railway a partir deste repositório, sem nenhum arquivo de configuração do Railway commitado (sem `railway.json`, `railway.toml`, `nixpacks.toml`, `Procfile`). A hipótese mais provável é que o Railway está usando auto-detecção (Nixpacks) e, ao encontrar um `index.html` na raiz sem `package.json` na raiz, está servindo o conteúdo da raiz do repositório como um site estático simples. Não há confirmação direta de como o deploy é disparado (presumimos que é automático a cada push na branch `main`, mas isso não foi confirmado pelo usuário) nem acesso a essa sessão ao dashboard/CLI do Railway do usuário (o `railway` CLI está instalado localmente mas não está `linked` a nenhum projeto). Ver `proposal.md` (Why/What Changes) para a motivação; ver `specs/site-publishing/spec.md` para o comportamento exigido.

O app Angular (`frontend/`) já builda com sucesso (`npm run build`) para `frontend/dist/frontend/browser/`, incluindo `index.html`, bundles JS/CSS com hash de conteúdo, favicon e `data/boletos.json` — ver capabilities `frontend-tooling` e `boletos-page`.

## Goals / Non-Goals

**Goals:**
- Decidir, com o mínimo de risco possível para o site em produção, como o build do Angular passa a ser o que o Railway serve no lugar do `index.html` estático.
- Definir como evitar acumular arquivos de builds antigos na raiz do repositório a cada nova publicação.
- Definir o novo alvo e formato de saída da skill `atualizar-boletos-mensais`.
- Deixar claro o que o usuário precisa verificar manualmente após o push, já que esta sessão não tem acesso ao Railway do usuário.

**Non-Goals:**
- Não decide se o Railway deveria, no futuro, buildar o Angular por conta própria via configuração dedicada (`railway.json`) — ver Decisões e Risks para por que essa alternativa foi preterida agora, mas não descartada para o futuro.
- Não configura preview/staging environment no Railway.
- Não altera a skill em nada além do necessário para apontar para o novo arquivo de dados.

## Decisions

### Publicar via cópia do build para a raiz do repositório (não via reconfiguração do Railway)
Escolhida a abordagem: gerar o build de produção do Angular e copiar o conteúdo de `frontend/dist/frontend/browser/` para a raiz do repositório (substituindo o `index.html` estático atual pelos arquivos gerados), commitando esses arquivos gerados no git como o novo conteúdo publicável da raiz.

- **Alternativa considerada**: adicionar um `railway.json`/`nixpacks.toml` na raiz instruindo o Railway a rodar `cd frontend && npm ci && npm run build` e servir `frontend/dist/frontend/browser` a cada deploy, sem commitar artefatos de build no git. Rejeitada **por enquanto**, apesar de ser a prática mais "limpa" (não versiona artefatos gerados), porque: (1) muda o mecanismo de build/deploy que hoje funciona por auto-detecção — se a suposição sobre como o Railway está configurado hoje estiver errada, a mudança pode quebrar o site no ar sem que tenhamos como diagnosticar remotamente (sem acesso ao dashboard/CLI do Railway do usuário nesta sessão); (2) a abordagem escolhida mantém o mecanismo de publicação idêntico ao de hoje — o Railway continua só servindo o que está na raiz do repositório, exatamente como já faz — reduzindo a superfície de risco a "os arquivos na raiz mudaram", não "a forma como o Railway builda/serve mudou". Fica registrado aqui como próximo passo natural caso, no futuro, o time queira parar de versionar artefatos de build.

### Publicação via script com manifesto, para evitar acumular arquivos de builds antigos
Um script (ex. `scripts/publish-site.sh`) faz: (1) rodar `cd frontend && npm ci && npm run build`; (2) ler um manifesto commitado (ex. `.site-manifest.txt`) listando os nomes dos arquivos publicados pela build anterior e removê-los da raiz, se existirem; (3) copiar todos os arquivos de `frontend/dist/frontend/browser/` para a raiz do repositório; (4) gravar um novo manifesto com os nomes dos arquivos recém-copiados.
- **Alternativa considerada**: apagar por padrão de nome (glob), ex. `rm main-*.js styles-*.css`. Rejeitada por ser frágil e arriscada — um glob mal calibrado pode apagar arquivos do projeto que não são de build (ex. se algum arquivo do repositório por coincidência combinar com o padrão). O manifesto explícito é determinístico: só apaga exatamente o que a build anterior publicou.
- O script nunca toca em `frontend/`, `openspec/`, `.claude/`, `README.md`, `.git*`, nem nos PDFs de boletos na raiz — só nos arquivos listados no manifesto mais os novos arquivos copiados do build.

### `index.html` estático antigo: substituído, não mantido em paralelo
O `index.html` atual na raiz é sobrescrito pelo `index.html` gerado pelo build do Angular (mesmo nome de arquivo, conteúdo novo) — não faz sentido mantê-lo como um arquivo separado, pois o objetivo explícito desta change é que o link publicado sirva a versão Angular, e manter os dois geraria ambiguidade sobre qual está realmente no ar (ver requirement "Conteúdo estático antigo não coexiste com a versão publicada").
- O `index.html` antigo continua recuperável via histórico do git (`git log -- index.html`), então nada é perdido de forma irreversível.

### Migração da skill `atualizar-boletos-mensais` para o novo formato de dados
`scripts/extract_boletos.py` passa a emitir o JSON no formato `{ mes, condominio, pagador, vencimento, banco, boletos: [{ unidade, valor, documento, linhaDigitavel }] }` (mesmo formato de `frontend/public/data/boletos.json`, ver capability `boletos-page`), e `SKILL.md` é atualizado para: (1) escrever esse JSON em `frontend/public/data/boletos.json` em vez de editar HTML; (2) manter os nomes de campo em português usados hoje no domínio (unidade, valor, documento, linhaDigitavel) para não introduzir uma segunda convenção de nomenclatura; (3) deixar explícito que, depois de atualizar os dados, é preciso rodar o script de publicação (`scripts/publish-site.sh`) para que a atualização chegue ao site publicado — atualizar só o JSON não é suficiente até esse passo ser rodado.
- **Alternativa considerada**: manter o script gerando o bloco `const boletos = [...]` e ter um passo manual de conversão para JSON. Rejeitada por adicionar um passo manual propenso a erro sem necessidade — é mais simples o script já emitir o formato final.

### Verificação pós-publicação é responsabilidade do usuário
Como esta sessão não tem acesso ao dashboard/conta do Railway do usuário, o `tasks.md` inclui, como última etapa, pedir explicitamente ao usuário para: (1) confirmar que o Railway disparou um novo deploy após o push; (2) abrir o link publicado e confirmar visualmente que a tela Angular aparece corretamente, sem erros; (3) avisar se algo saiu diferente do esperado, para que a mudança possa ser revertida rapidamente (`git revert` do commit de publicação restaura o `index.html` estático anterior).

## Risks / Trade-offs

- [Nossa suposição sobre como o Railway está configurado hoje (auto-detecção de site estático servindo a raiz do repo) pode estar errada — ex. pode haver configuração feita direto no dashboard do Railway, fora do repositório, que não conseguimos ver] → Mitigação: a abordagem escolhida (cópia do build para a raiz, sem exigir nenhuma config nova do Railway) é a que menos depende dessa suposição estar certa — se o Railway hoje só serve arquivos estáticos da raiz, continuará servindo os novos arquivos da mesma forma. Ainda assim, a verificação pós-deploy pelo usuário é obrigatória antes de considerar a mudança concluída.
- [Quebrar o acesso dos moradores ao boleto do mês, já que é uma página que eles usam para pagar de verdade] → Mitigação: mudança feita com rollback simples (`git revert`), verificação pós-deploy explícita no `tasks.md`, e nenhuma mudança de URL/DNS que pudesse tornar o rollback mais complicado.
- [Acumular lixo de builds antigos na raiz do repositório ao longo do tempo, se o manifesto não for atualizado corretamente] → Mitigação: o script de publicação sempre lê e reescreve o manifesto como parte do mesmo processo atômico de publicação, e `tasks.md` inclui verificar que `git status` não mostra arquivos de build órfãos após rodar o script duas vezes seguidas (idempotência).
- [A skill migrada gerar JSON malformado e quebrar o carregamento de dados no site publicado] → Mitigação: `tasks.md` inclui validar o JSON gerado (`JSON.parse`) e testar visualmente a tela antes de publicar, mesmo padrão de verificação já usado nas changes anteriores.

## Open Questions

- Confirmar com o usuário, após o primeiro push desta change, se o Railway realmente redisparou o deploy automaticamente e se o link publicado ficou correto — não é algo que possamos verificar remotamente nesta sessão. Se o deploy não disparar sozinho, o usuário provavelmente precisará disparar manualmente pelo dashboard do Railway (ação fora do escopo desta sessão).
