## Why

Este projeto hoje é um site estático de página única (`index.html`) mantido manualmente a cada atualização mensal de boletos. Para evoluir o projeto (componentização, manutenibilidade, UI consistente) vamos migrar o frontend para Angular, usando Angular Material como biblioteca de componentes. Antes de portar qualquer funcionalidade existente, é preciso instalar e configurar a base do projeto Angular + Angular Material, para que as próximas changes tenham uma stack pronta para uso.

## What Changes

- Instalar o Angular CLI e gerar um novo workspace Angular na última versão estável, usando componentes standalone (sem `NgModules`) e a estrutura de projeto padrão do CLI atual.
- Adicionar e configurar o Angular Material (via `ng add @angular/material`), incluindo:
  - Escolha e aplicação de um tema pré-construído (ou tema customizado) do Angular Material.
  - Configuração de tipografia global e animações do Angular Material/CDK.
  - Inclusão das fontes necessárias (ex.: Material Symbols/Roboto) conforme o setup padrão do `ng add`.
- Configurar scripts de desenvolvimento (`npm start`/`ng serve`, `npm run build`/`ng build`) e o `package.json` resultante do scaffolding do Angular CLI.
- Criar uma estrutura de pastas inicial dentro do app Angular (ex.: `src/app/`) pronta para receber, em uma change futura, a migração da tela de boletos hoje em `index.html` — sem migrar essa funcionalidade nesta change.
- Adicionar/ajustar `.gitignore` para artefatos do Node/Angular (`node_modules/`, `dist/`, etc.).
- **BREAKING**: nenhuma, pois o `index.html` estático atual permanece intocado e funcional; o novo app Angular é adicionado ao repositório sem substituir o site publicado atualmente.

Fora de escopo nesta change (fica para changes futuras):
- Migrar o conteúdo/layout/lógica de `index.html` para componentes Angular.
- Configurar deploy/hospedagem do novo app Angular.
- Adicionar roteamento, state management, testes automatizados ou CI para o app Angular além do que o scaffolding padrão do CLI já traz.

## Capabilities

### New Capabilities
- `frontend-tooling`: instalação e configuração da stack de frontend do projeto (workspace Angular na última versão estável + Angular Material com tema, tipografia e fontes configurados), incluindo os scripts para rodar e buildar o app localmente.

### Modified Capabilities
(nenhuma — não há specs existentes neste projeto até o momento)

## Impact

- **Novo código**: novo workspace Angular (ex.: diretório `frontend/` ou raiz do app Angular, a definir em `design.md`), com `package.json`, `angular.json`, `tsconfig*.json` e `src/` gerados pelo Angular CLI.
- **Dependências**: Node.js/npm passam a ser pré-requisitos do projeto (hoje o projeto não tem nenhuma dependência de build). Novas dependências: `@angular/*` (última versão estável), `@angular/material`, `@angular/cdk`, Angular CLI como devDependency.
- **Arquivos existentes**: `index.html` e os PDFs de boletos permanecem inalterados; `README.md` e `.gitignore` podem ser atualizados para documentar/ignorar a nova stack.
- **Sem impacto em produção**: como nada do site publicado hoje é alterado, não há risco para os moradores que acessam a página de boletos atual.
