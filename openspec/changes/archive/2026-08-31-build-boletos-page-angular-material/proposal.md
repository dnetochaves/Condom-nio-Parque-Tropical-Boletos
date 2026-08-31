## Why

A change anterior (`setup-angular-material-frontend`, arquivada) instalou o workspace Angular + Angular Material em `frontend/`, mas ainda sem nenhuma tela de negócio — só o scaffold padrão do CLI. Enquanto isso, a funcionalidade real de "ver os boletos do mês" continua existindo apenas como um site estático (`index.html`), com HTML/CSS/JS escritos à mão e sem nenhum framework. Para a stack Angular + Material deixar de ser só ferramental instalado e passar a valer a pena, é preciso construir a tela de boletos dentro dela — usando componentes do Angular Material e pensando o layout mobile-first, já que os moradores acessam essa página quase sempre pelo celular para pagar o boleto.

## What Changes

- Criar, dentro do app Angular (`frontend/`), uma tela/feature de "boletos" que reproduz toda a funcionalidade hoje presente em `index.html`:
  - Cabeçalho com o título do mês/condomínio, nome do pagador, data de vencimento e banco.
  - Resumo com a quantidade de boletos e o valor total.
  - Campo de busca que filtra os boletos por unidade em tempo real.
  - Lista de boletos, cada um mostrando unidade, valor, número do documento, vencimento e a linha digitável.
  - Botão "Copiar" em cada boleto que copia a linha digitável para a área de transferência, com feedback visual temporário (ex.: "Copiado!").
- Construir essa tela usando componentes do Angular Material (ex.: `MatToolbar`, `MatFormField`/`MatInput` para a busca, `MatCard` ou estrutura equivalente para cada boleto, `MatButton`/`MatIconButton` para o botão copiar) em vez de HTML/CSS customizado do zero, seguindo o tema já configurado na change anterior.
- Layout **mobile-first**: a tela é desenhada primeiro para telas pequenas de celular (toque, espaçamento, tamanho de fonte, densidade de informação), com a intenção de parecer e se comportar como um aplicativo (não como um documento de texto). Comportamento em telas maiores (tablet/desktop) é um enhancement progressivo a partir da base mobile, não o ponto de partida do design.
- Extrair os dados dos boletos (hoje um array `boletos` hardcoded dentro do `<script>` de `index.html`) para um arquivo de dados separado dentro do app Angular (ex.: um JSON), carregado por um serviço, mantendo os mesmos dados de exemplo do mês atual (setembro/2026) já presentes no `index.html` — sem buscar um mês novo nesta change.
- **BREAKING**: nenhuma. O `index.html` na raiz do repositório não é alterado, removido nem tem seu comportamento modificado por esta change; ele continua sendo o site publicado hoje, funcionando exatamente como está. A nova tela vive apenas dentro de `frontend/` e é verificada localmente via `ng serve`.

Fora de escopo nesta change (fica para changes futuras):
- Deploy/hospedagem/publicação do app Angular como o site ativo do condomínio.
- Migrar a skill `atualizar-boletos-mensais` para editar o novo arquivo de dados em vez do `index.html` (o `design.md` pode registrar a intenção, mas a skill em si não é alterada aqui).
- Autenticação, backend ou API — os dados continuam estáticos, versionados no repositório.
- Buscar/gerar dados de um mês diferente do que já está em `index.html`.

## Capabilities

### New Capabilities
- `boletos-page`: comportamento observável da tela de boletos dentro do app Angular — o que o usuário vê e pode fazer (visualizar resumo, buscar por unidade, ver detalhes de cada boleto, copiar a linha digitável), incluindo o requisito de a experiência ser mobile-first.

### Modified Capabilities
(nenhuma — `frontend-tooling` cobre apenas o ferramental de setup, não é afetada por esta change)

## Impact

- **Novo código**: novos componentes/serviço Angular dentro de `frontend/src/app/features/boletos/` (aproveitando a estrutura de pastas criada na change anterior), incluindo um arquivo de dados (ex.: `boletos.json`) com os dados de exemplo migrados de `index.html`.
- **Dependências**: nenhuma nova além do que já foi instalado (`@angular/material`, `@angular/cdk`) na change anterior.
- **Arquivos existentes**: `index.html` e os PDFs de boletos na raiz do repositório permanecem inalterados. `frontend/src/app/app.html`/`app.ts` passam a referenciar/renderizar a nova feature de boletos no lugar do template padrão gerado pelo CLI.
- **Sem impacto em produção**: como o `index.html` publicado hoje não é tocado, não há risco para os moradores que já usam a página atual para pagar o boleto.
