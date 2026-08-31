# Condomínio Parque Tropical - Boletos

## Site atual (publicado)

O `index.html` na raiz deste repositório é o site estático publicado atualmente, com os boletos mensais do condomínio. Ele não depende de build e continua sendo atualizado normalmente (ver skill `atualizar-boletos-mensais`).

## Novo frontend (em construção): `frontend/`

O diretório `frontend/` contém um novo app [Angular](https://angular.dev/) (última versão estável, componentes standalone) com [Angular Material](https://material.angular.dev/) como biblioteca de componentes de UI. Esta stack ainda está em construção e **não substitui** o `index.html` atual — a migração da tela de boletos para Angular será feita em uma change futura.

### Pré-requisitos

- Node.js 20.19+ / 22.12+ (recomendado: a versão LTS mais recente disponível)
- npm (instalado junto com o Node.js)

### Rodando localmente

```bash
cd frontend
npm install
npm start
```

A aplicação fica disponível em `http://localhost:4200`.

### Build de produção

```bash
cd frontend
npm run build
```

Os artefatos são gerados em `frontend/dist/`.
