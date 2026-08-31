## Why

O app Angular + Angular Material com a tela de boletos (`frontend/`) já está pronto e verificado localmente, mas o que os moradores realmente acessam hoje — o link publicado no Railway — continua servindo o `index.html` estático antigo. Enquanto isso não mudar, todo o trabalho das duas changes anteriores fica sem efeito prático para quem usa o site de verdade. Esta change fecha esse ciclo: faz o app Angular se tornar o que é efetivamente servido no mesmo link já em uso, e ajusta o processo mensal de atualização de boletos para continuar funcionando depois da troca.

## What Changes

- O conteúdo publicado pelo Railway no link já em uso pelos moradores (`https://condom-nio-parque-tropical-boletos-production.up.railway.app`) passa a ser o build de produção do app Angular (`frontend/`), com a tela de boletos em vez do `index.html` estático atual. Nenhuma troca de URL/domínio é feita.
- O `index.html` estático atual na raiz do repositório é substituído pelos arquivos gerados pelo build do Angular (mesmo mecanismo de publicação de hoje continua servindo o que está na raiz do repositório — só o conteúdo muda). Ver `design.md` para como isso é gerado e mantido de forma segura a cada atualização.
- A skill `atualizar-boletos-mensais` passa a atualizar `frontend/public/data/boletos.json` (a fonte de dados da tela Angular) em vez de editar HTML/JS embutido em `index.html`, já que esse arquivo deixa de ser editado manualmente. O script de extração (`extract_boletos.py`) é ajustado para gerar esse JSON no lugar do bloco `const boletos = [...]`.
- **BREAKING**: o `index.html` estático atual deixa de ser a versão publicada — quem acessa o link passa a ver a tela em Angular + Material (visual e estrutura de página diferentes do HTML estático anterior, embora o conteúdo/funcionalidade seja equivalente: mesmos boletos, busca, cópia de linha digitável).

Fora de escopo nesta change:
- Trocar de provedor de hospedagem, domínio ou URL publicada.
- CI/CD além do mínimo necessário para publicar o build do Angular pelo mecanismo do Railway já em uso.
- Testes automatizados end-to-end do site publicado.
- Autenticação ou qualquer controle de acesso à página.
- Novas funcionalidades na tela de boletos além do que já foi construído na change anterior.

## Capabilities

### New Capabilities
- `site-publishing`: comportamento observável de "o que está publicado no link em uso pelos moradores" — a tela servida é a versão Angular + Material, e o processo mensal de atualização de boletos continua efetivamente atualizando o que é publicado.

### Modified Capabilities
(nenhuma — `frontend-tooling` e `boletos-page` descrevem o app Angular em si, que não muda de comportamento nesta change; só passa a ser o que é servido publicamente)

## Impact

- **Arquivos na raiz do repositório**: o `index.html` estático atual é substituído pelos arquivos do build de produção do Angular (index.html gerado, bundles JS/CSS com hash, `data/boletos.json`, favicon). Ver `design.md` para o mecanismo exato e como evitar acumular arquivos de builds antigos.
- **Skill `atualizar-boletos-mensais`**: `.claude/skills/atualizar-boletos-mensais/SKILL.md` e `scripts/extract_boletos.py` são atualizados para o novo alvo (`frontend/public/data/boletos.json`) e novo formato de saída (JSON em vez de bloco JS).
- **Produção**: como o link publicado hoje passa a servir outro conteúdo, existe risco real de quebrar o acesso dos moradores ao boleto se algo sair errado na publicação. `design.md` traz a mitigação e os passos de verificação pós-publicação; a confirmação final de que o site no ar está correto depende do usuário (não há acesso ao dashboard/conta do Railway nesta sessão).
- **Sem mudança de URL/domínio/hospedagem**: nada muda em como os moradores encontram o link.
