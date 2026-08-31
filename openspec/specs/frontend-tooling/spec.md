# frontend-tooling Specification

## Purpose

Define a base de ferramental de frontend do projeto: um workspace Angular na última versão estável com Angular Material instalado e configurado, pronto para que funcionalidades sejam construídas em changes futuras.

## Requirements

### Requirement: Workspace Angular instalável e executável localmente
O projeto SHALL conter um workspace Angular, gerado com a última versão estável do Angular CLI disponível no momento do setup, que qualquer desenvolvedor consiga instalar e rodar localmente com comandos padrão (`npm install` seguido de `npm start`/`ng serve`).

#### Scenario: Instalação de dependências
- **WHEN** um desenvolvedor clona o repositório e executa `npm install` dentro do diretório do app Angular
- **THEN** todas as dependências são instaladas sem erros, usando apenas os arquivos versionados no repositório (`package.json`/`package-lock.json`)

#### Scenario: Servidor de desenvolvimento sobe com sucesso
- **WHEN** um desenvolvedor executa o comando de desenvolvimento (`npm start` ou `ng serve`) após instalar as dependências
- **THEN** a aplicação Angular é compilada sem erros e fica acessível via navegador em um servidor local (ex.: `http://localhost:4200`), exibindo a página inicial padrão do app

#### Scenario: Build de produção é gerado com sucesso
- **WHEN** um desenvolvedor executa o comando de build (`npm run build` ou `ng build`)
- **THEN** o Angular CLI gera os artefatos de produção em um diretório de saída (ex.: `dist/`) sem erros de compilação

### Requirement: Angular Material configurado com tema e tipografia
O workspace Angular SHALL ter o Angular Material e o Angular CDK instalados e configurados, com um tema visual aplicado e a tipografia global do Material carregada, de forma que componentes do Angular Material renderizem estilizados corretamente ao serem usados em qualquer componente do app.

#### Scenario: Tema do Angular Material aplicado globalmente
- **WHEN** a aplicação Angular é executada
- **THEN** os estilos globais do tema do Angular Material (cores, tipografia) estão carregados na página, sem necessidade de configuração adicional pelo desenvolvedor que for construir uma tela

#### Scenario: Componente do Angular Material renderiza estilizado
- **WHEN** um componente do Angular Material (ex.: `MatButtonModule`/`MatButton`) é importado e usado em um componente standalone do app
- **THEN** o componente é renderizado na tela com o estilo visual do tema configurado, sem erros de módulo ou de estilo ausente no console do navegador

#### Scenario: Ícones e fontes do Material disponíveis
- **WHEN** a aplicação Angular é carregada no navegador
- **THEN** as fontes/ícones necessários para os componentes do Angular Material (ex.: tipografia Roboto e/ou Material Symbols, conforme configurado pelo `ng add @angular/material`) estão disponíveis, sem erros 404 de fonte no console

### Requirement: Site estático atual permanece intacto
A instalação e configuração da nova stack Angular SHALL conviver com o site estático existente (`index.html` na raiz do repositório) sem alterá-lo funcionalmente nem quebrar seu funcionamento atual.

#### Scenario: index.html continua funcionando sem alterações de comportamento
- **WHEN** o arquivo `index.html` existente é aberto diretamente (como hoje, sem build do Angular)
- **THEN** ele continua exibindo os boletos e funcionando exatamente como antes da introdução do workspace Angular
