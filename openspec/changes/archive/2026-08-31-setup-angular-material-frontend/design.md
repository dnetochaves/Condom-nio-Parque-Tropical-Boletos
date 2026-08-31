## Context

Hoje o repositório não tem nenhum toolchain de build: é apenas `index.html` estático mais os PDFs mensais de boletos, atualizados manualmente pela skill `atualizar-boletos-mensais`. Não existe `package.json`, Node.js não é um pré-requisito atual do projeto. Ver `proposal.md` (Why/What Changes) para a motivação e o escopo desta change.

## Goals / Non-Goals

**Goals:**
- Definir onde o novo workspace Angular vive no repositório e como ele coexiste com o site estático atual.
- Definir a versão do Angular/Angular Material a instalar e como o tema do Material será escolhido/aplicado.
- Deixar o app pronto para `ng serve`/`ng build` funcionarem de primeira para o próximo desenvolvedor (ou change) que for migrar a tela de boletos.

**Non-Goals:**
- Não decide layout, componentes ou rotas da futura tela de boletos em Angular — isso é de uma change futura de migração.
- Não decide estratégia de deploy/hospedagem do app Angular (o `index.html` atual continua sendo o que está publicado).
- Não introduz testes e2e, CI ou linters além do que o `ng new` padrão já traz.

## Decisions

### Localização do workspace Angular: diretório `frontend/`
O workspace Angular será criado em um diretório próprio `frontend/` na raiz do repositório (via `ng new frontend --directory frontend` executado na raiz), em vez de na raiz do repo.
- **Alternativa considerada**: gerar o Angular direto na raiz do repositório. Rejeitada porque a raiz já contém `index.html`, os PDFs e o `README.md` do site estático atual; misturar isso com `angular.json`/`src/` do Angular tornaria ambíguo qual é "o site" durante a transição, e o `ng new` reclama/gera conflitos ao rodar em um diretório não vazio.
- Isso mantém o `index.html` publicado hoje intocado e isolado, e deixa claro que `frontend/` é a stack nova ainda não publicada.

### Geração do projeto: standalone, sem testes unitários adicionais além do padrão
Usar `ng new frontend` com as opções padrão atuais do Angular CLI para projetos standalone (sem `NgModules`), aceitando o padrão de estilos (SCSS, recomendado pelo próprio `ng add @angular/material` para customização de tema) e mantendo o Karma/Jasmine padrão gerado pelo CLI sem configuração extra.
- **Alternativa considerada**: usar CSS puro em vez de SCSS. Rejeitada porque o Angular Material recomenda Sass para customizar temas (`@use '@angular/material' as mat;`), e isso evita ter que migrar de CSS para SCSS numa change futura só para temizar.

### Instalação do Angular Material via `ng add`
Usar `ng add @angular/material` dentro de `frontend/` em vez de instalar os pacotes manualmente via `npm install` + configuração manual.
- **Alternativa considerada**: instalar `@angular/material`/`@angular/cdk` manualmente e configurar tema/tipografia/animações à mão. Rejeitada porque `ng add` é o caminho oficial suportado pela equipe do Angular Material, já cobre os requirements do spec (tema, tipografia, fontes, animações) de forma consistente com a versão instalada, reduzindo risco de divergência de configuração.
- Durante o `ng add`, escolher: um tema pré-construído (ex.: `Azure/Blue`) como ponto de partida — pode ser trocado depois sem impacto arquitetural —, habilitar tipografia global (`Set up global Angular Material typography styles`) e manter as animações do Angular padrão habilitadas.

### Versões: última versão estável do Angular e Angular Material no momento da execução
Não fixamos aqui um número de versão específico — `tasks.md` instrui a rodar `ng new`/`ng add` sem pin de versão, capturando a versão real instalada (via `ng version`) no PR/commit desta change, garantindo Angular e Angular Material sempre na mesma major/minor (o `ng add @angular/material` já resolve isso automaticamente para a versão do Angular instalada).

## Risks / Trade-offs

- [Ter dois "frontends" no repo (site estático em `index.html` + app Angular em `frontend/`) pode confundir sobre qual é o site "de verdade"] → Mitigação: `README.md` será atualizado nesta change para deixar explícito que `index.html` continua sendo o site publicado atualmente, e que `frontend/` é a nova stack em construção, ainda não publicada.
- [`node_modules/` e `dist/` dentro de `frontend/` podem ser versionados por engano] → Mitigação: adicionar/atualizar `.gitignore` como parte das tasks desta change, antes do primeiro commit do scaffolding.
- [Ambiente local do desenvolvedor pode não ter Node.js/npm instalado, ou ter uma versão muito antiga incompatível com o Angular CLI atual] → Mitigação: `tasks.md` inclui um passo de verificar a versão do Node instalada e, se necessário, atualizar antes do scaffolding; documentar a versão mínima de Node exigida no `README.md`.
