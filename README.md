# Condomínio Parque Tropical - Boletos

## Site publicado

O link publicado (deploy no Railway) serve o build de produção do app [Angular](https://angular.dev/) com [Angular Material](https://material.angular.dev/) que fica em `frontend/`. Os arquivos na raiz do repositório (`index.html`, os bundles `main-*.js`/`styles-*.css`, `favicon.ico` e `data/boletos.json`) são gerados por esse build — não são editados manualmente, e não devem ser editados diretamente: qualquer mudança deve ser feita em `frontend/` e republicada (ver "Publicando uma atualização" abaixo).

O `.site-manifest.txt` na raiz lista os arquivos gerados pela última publicação; ele existe só para o script de publicação saber o que limpar antes de copiar o próximo build, e é atualizado automaticamente a cada publicação.

## Estrutura do app: `frontend/`

O app Angular usa componentes standalone e Angular Material (tema, tipografia e ícones já configurados). A tela de boletos (`frontend/src/app/features/boletos/`) mostra cabeçalho, resumo, busca por unidade, listagem e cópia da linha digitável, com layout mobile-first (pensada primeiro para celular, com sensação de aplicativo).

Os dados exibidos vêm de `frontend/public/data/boletos.json`.

### Pré-requisitos

- Node.js 20.19+ / 22.12+ (recomendado: a versão LTS mais recente disponível)
- npm (instalado junto com o Node.js)

### Rodando localmente (modo desenvolvimento)

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

## Publicando uma atualização

Depois de atualizar os dados (`frontend/public/data/boletos.json`, normalmente via skill `atualizar-boletos-mensais`) ou o código do app, rode na raiz do repositório:

```bash
./scripts/publish-site.sh
```

Esse script builda o app Angular e copia o resultado para a raiz do repositório, substituindo a publicação anterior (usando `.site-manifest.txt` para limpar os arquivos do build anterior sem afetar o resto do repositório). Depois de rodar, revise as mudanças (`git status`/`git diff`) e faça commit + push na branch usada pelo Railway (`main`) para que a atualização chegue ao site no ar — confira o link publicado depois do deploy para garantir que tudo carregou corretamente.
