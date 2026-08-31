## 1. Pré-requisitos

- [x] 1.1 Verificar a versão do Node.js/npm instalada localmente (`node -v`, `npm -v`) e confirmar que atende ao mínimo exigido pela última versão estável do Angular CLI; atualizar o Node local se necessário
- [x] 1.2 Instalar/atualizar o Angular CLI globalmente ou via `npx` e verificar com `ng version` que a versão do CLI resolvida é a última estável

## 2. Scaffolding do workspace Angular

- [x] 2.1 Rodar `ng new frontend` na raiz do repositório (projeto standalone, estilos SCSS, sem SSR) e verificar que o diretório `frontend/` é criado com `package.json`, `angular.json`, `tsconfig*.json` e `src/`
- [x] 2.2 Rodar `npm install` dentro de `frontend/` e verificar que termina sem erros
- [x] 2.3 Rodar `npm start` (`ng serve`) dentro de `frontend/` e verificar que a aplicação padrão gerada pelo CLI é servida em `http://localhost:4200` sem erros no terminal ou no console do navegador
- [x] 2.4 Rodar `npm run build` (`ng build`) dentro de `frontend/` e verificar que o build de produção conclui sem erros, gerando artefatos em `frontend/dist/`

## 3. Instalação e configuração do Angular Material

- [x] 3.1 Rodar `ng add @angular/material` dentro de `frontend/`, escolhendo um tema pré-construído (ex.: Azure/Blue), habilitando tipografia global e mantendo animações do Angular habilitadas; verificar que `@angular/material` e `@angular/cdk` aparecem no `package.json`
- [x] 3.2 Verificar que os estilos globais do tema do Material foram registrados (em `angular.json`/`styles.scss`, conforme gerado pelo `ng add`) e que as fontes/ícones do Material (Roboto/Material Symbols) foram adicionados ao `index.html` do app Angular
- [x] 3.3 Adicionar um componente do Angular Material (ex.: `MatButtonModule`) ao componente raiz gerado, apenas como verificação visual, e confirmar via `ng serve` que ele renderiza estilizado com o tema aplicado, sem erros no console do navegador
- [x] 3.4 Reverter/remover o componente de verificação do passo 3.3 do template raiz, deixando o app no estado "scaffold limpo" pronto para a próxima change construir a tela de boletos

## 4. Estrutura de pastas e organização inicial

- [x] 4.1 Criar a estrutura de pastas inicial dentro de `frontend/src/app/` (ex.: `core/`, `shared/`, `features/`) que receberá, em change futura, a migração da tela de boletos — sem adicionar lógica de negócio nesta change
- [x] 4.2 Adicionar/atualizar `.gitignore` na raiz do repositório (ou dentro de `frontend/`) cobrindo `node_modules/`, `dist/`, `.angular/` e demais artefatos de build do Angular

## 5. Documentação e finalização

- [x] 5.1 Atualizar `README.md` na raiz do repositório explicando que `index.html` continua sendo o site publicado atualmente e que `frontend/` é a nova stack Angular + Angular Material em construção, incluindo os comandos para instalar e rodar (`npm install`, `npm start`, `npm run build`)
- [x] 5.2 Confirmar que `index.html` e os PDFs de boletos na raiz do repositório permanecem inalterados após todas as tarefas acima (diff do git não mostra mudanças nesses arquivos)
- [x] 5.3 Rodar `openspec validate setup-angular-material-frontend --strict` e corrigir quaisquer erros apontados antes de considerar a change pronta para implementação
