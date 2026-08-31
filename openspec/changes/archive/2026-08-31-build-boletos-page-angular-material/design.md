## Context

O app Angular em `frontend/` hoje só tem o scaffold padrão do CLI (`App` standalone renderizando o template de boas-vindas) mais Angular Material configurado (tema Azure/Blue, tipografia Roboto) — ver capability `frontend-tooling`. A estrutura `frontend/src/app/{core,shared,features}/` já foi criada para receber telas futuras. Ver `proposal.md` (Why/What Changes) para a motivação e o escopo desta change; ver `specs/boletos-page/spec.md` para o comportamento exigido.

## Goals / Non-Goals

**Goals:**
- Decidir onde a feature de boletos vive dentro de `frontend/src/app/`, como os dados são carregados e quais componentes do Angular Material mapeiam para cada parte da tela atual.
- Definir a estratégia mobile-first (breakpoints, unidades, comportamento de toque) de forma concreta o suficiente para implementar sem ambiguidade.
- Definir o formato do arquivo de dados que substitui o array `boletos` hardcoded do `index.html`.

**Non-Goals:**
- Não decide deploy/hospedagem (ver proposal.md - Fora de escopo).
- Não decide a migração da skill `atualizar-boletos-mensais` em si — só deixa registrado o formato de dados que ela precisará passar a escrever numa change futura.
- Não introduz roteamento (a tela de boletos pode ser a única tela renderizada pelo `App` root nesta change; múltiplas rotas ficam para quando houver mais de uma tela).

## Decisions

### Localização: `frontend/src/app/features/boletos/`
A feature vive em `frontend/src/app/features/boletos/`, com um componente de página (ex.: `boletos-page.ts`/`.html`/`.scss`) e um serviço (ex.: `boletos.service.ts` ou `boletos.ts` como função/service standalone) responsável por carregar os dados.
- **Alternativa considerada**: colocar tudo direto em `app.ts`/`app.html`. Rejeitada porque `app` deve continuar sendo só o shell da aplicação (root component), e a pasta `features/` já foi criada exatamente para isolar telas de negócio, facilitando adicionar rotas/novas telas depois sem reestruturar.
- O componente `App` (root) passa a renderizar o componente de boletos diretamente no seu template, no lugar do conteúdo padrão do CLI (sem introduzir roteamento nesta change).

### Dados: arquivo JSON em `frontend/src/app/features/boletos/boletos.json`, tipado via `provideHttpClient`/`fetch` ou import direto
Os dados de boletos (unidade, valor, doc, linha digitável) mais os metadados do mês (título, pagador, vencimento, banco) ficam em um arquivo `boletos.json` dentro da pasta da feature, com a mesma estrutura de campos hoje presente no array `boletos` do `index.html`, acrescida dos metadados de cabeçalho que hoje estão hardcoded direto no HTML (título, pagador, vencimento, banco).
- **Alternativa considerada**: importar o JSON diretamente via `import boletosData from './boletos.json'` (TypeScript `resolveJsonModule`). Rejeitada como abordagem única porque isso embute os dados no bundle JS no momento do build; preferimos carregar via `HttpClient` a partir de `public/`/`assets` (arquivo servido como estático), o que deixa mais claro, para uma futura change de automação, que atualizar o mês é "trocar um arquivo de dados servido estaticamente" e não "recompilar o app" — mais próximo do fluxo atual (editar HTML) em termos de simplicidade operacional. Também evita reintroduzir a mistura de dados com lógica de apresentação que estamos justamente removendo.
- Estrutura sugerida do JSON:
  ```json
  {
    "mes": "Setembro 2026",
    "condominio": "Condomínio Parque Tropical",
    "pagador": "Pompeu Fusco Angelico",
    "vencimento": "2026-09-05",
    "banco": "481-2",
    "boletos": [
      { "unidade": "FL 0604", "valor": 1944.28, "documento": "572429722", "linhaDigitavel": "48190.00003 00495.890576 24297.220147 9 15630000194428" }
    ]
  }
  ```
- O serviço de boletos expõe os dados já ordenados (mesma lógica de ordenação por prefixo + número da unidade que existe hoje em `index.html`) e um total calculado (contagem e soma), para o componente de página consumir via signals/observable.

### Componentes do Angular Material por parte da tela
| Parte da tela atual (`index.html`) | Componente(s) do Angular Material |
| --- | --- |
| `<header>` (título, pagador, vencimento, banco) | `MatToolbar` (ou um container customizado estilizado com as system-variables do tema, se `MatToolbar` for visualmente restritivo demais) |
| `.summary` (contagem + valor total) | Layout simples com tipografia do tema Material (`mat-headline`/`mat-body` via classes de tipografia), sem componente dedicado |
| `.filter-bar input` (busca) | `MatFormField` + `MatInput`, com `matPrefix`/ícone de busca |
| `.card` (cada boleto) | `MatCard` (`mat-card`, `mat-card-header`, `mat-card-content`) |
| `.copy-btn` | `MatButton`/`MatIconButton` com feedback de estado (texto ou ícone mudando temporariamente, sem depender de `MatSnackBar` para não obrigar dependência adicional de overlay nesta change — mas `MatSnackBar` é uma alternativa aceitável se o desenvolvedor preferir para o "Copiado!") |

- **Alternativa considerada para o feedback de cópia**: usar `MatSnackBar`. Mantida como opção válida na implementação (não é uma decisão travada), já que ambas abordagens satisfazem o requirement "confirmação visual temporária" do spec; a escolha final fica a critério de quem implementar, com preferência por manter simples (mudança de texto/ícone no próprio botão) se não houver necessidade real de um snackbar.

### Mobile-first: breakpoint único inicial via CSS
A folha de estilo da feature usa mobile como estilo base (sem media query), e adiciona uma media query `min-width` (ex.: `600px`, alinhado ao breakpoint `sm` de referência do Angular Material/Material Design) apenas para ajustes de largura máxima de conteúdo e respiro em telas maiores — sem duplicar HTML/lógica entre versões mobile e desktop.
- **Alternativa considerada**: usar `BreakpointObserver` do Angular CDK para alternar layouts via TypeScript. Rejeitada para esta change por ser mais complexidade do que o necessário — os requirements do spec pedem adaptação de layout (espaçamento/largura), não mudança estrutural de componentes entre tamanhos de tela; CSS puro resolve isso com menos código. Pode ser revisitado se uma change futura exigir comportamento condicional mais complexo por tamanho de tela.

## Risks / Trade-offs

- [Duplicar dados de exemplo entre `index.html` (site publicado) e o novo `boletos.json` do app Angular pode gerar divergência se alguém atualizar um e esquecer o outro, já que a skill `atualizar-boletos-mensais` ainda só edita o `index.html` nesta change] → Mitigação: documentar explicitamente no `tasks.md` e no `README.md` do `frontend/` que, até a skill ser migrada (change futura), atualizar o mês exige editar os dois lugares; isso é uma limitação temporária aceita conscientemente.
- [Carregar o JSON via `HttpClient`/`fetch` a partir de um asset estático exige que o dev server e o build sirvam esse arquivo corretamente; um caminho errado quebra a tela silenciosamente ou com erro genérico] → Mitigação: `tasks.md` inclui verificação explícita de que o carregamento funciona tanto em `ng serve` quanto em `ng build` + servir o `dist/` localmente.
- [Escolher `MatCard`/`MatToolbar` pode não bater 100% com o visual atual do `index.html` (cores, densidade) já que estamos trocando estilos customizados por componentes de um design system] → Mitigação: aceitável e esperado — o objetivo desta change é justamente que a tela passe a refletir a linguagem visual do Angular Material, não replicar pixel a pixel o visual antigo.
