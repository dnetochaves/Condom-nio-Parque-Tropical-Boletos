## 1. Dados dos boletos

- [x] 1.1 Criar `frontend/public/data/boletos.json` (ou local equivalente servido como asset estático) com a estrutura `{ mes, condominio, pagador, vencimento, banco, boletos: [{ unidade, valor, documento, linhaDigitavel }] }`, migrando os dados de exemplo de setembro/2026 hoje hardcoded em `index.html`; verificar que o JSON é válido (`node -e "JSON.parse(require('fs').readFileSync('frontend/public/data/boletos.json'))"` ou equivalente)
- [x] 1.2 Criar um modelo/interface TypeScript (ex.: `frontend/src/app/features/boletos/boleto.model.ts`) tipando o formato acima, e verificar que compila sem erros de tipo

## 2. Serviço de boletos

- [x] 2.1 Criar `frontend/src/app/features/boletos/boletos.service.ts` (ou nome equivalente) que carrega `boletos.json` via `HttpClient`, expõe os metadados do mês e a lista de boletos já ordenada por prefixo + número da unidade (mesma lógica de ordenação hoje em `index.html`); registrar `provideHttpClient()` em `app.config.ts` e verificar via `ng serve` que os dados chegam ao componente sem erro no console
- [x] 2.2 No serviço (ou em uma função derivada consumida pelo componente), calcular a contagem total de boletos e o valor total somado, e verificar manualmente que os valores batem com o JSON de origem

## 3. Componente da tela de boletos

- [x] 3.1 Criar o componente `frontend/src/app/features/boletos/boletos-page.ts` (standalone) com template e estilos próprios, consumindo o serviço de boletos, e substituir o conteúdo padrão do CLI em `app.html`/`app.ts` por esse componente; verificar via `ng serve` que a tela renderiza sem erros no console
- [x] 3.2 Implementar o cabeçalho (mês/condomínio, pagador, vencimento, banco) usando `MatToolbar` (ou alternativa definida no design), populado a partir dos metadados carregados pelo serviço; verificar visualmente que os dados aparecem corretamente
- [x] 3.3 Implementar o resumo (quantidade de boletos + valor total formatado em R$ via `pt-BR`) acima ou junto à lista; verificar que o valor exibido bate com a soma calculada na tarefa 2.2
- [x] 3.4 Implementar o campo de busca com `MatFormField`/`MatInput`, filtrando a lista por unidade em tempo real (case-insensitive); verificar manualmente digitando um trecho de uma unidade e confirmando que a lista filtra corretamente, e que limpar o campo restaura a lista completa
- [x] 3.5 Implementar a listagem de boletos com `MatCard` (unidade, valor, documento, vencimento, linha digitável), garantindo que a linha digitável quebre/role sem estourar a largura da tela em viewport de celular; verificar visualmente em `ng serve` com viewport ~375px de largura
- [x] 3.6 Implementar a ação de copiar linha digitável (`MatButton`/`MatIconButton`) usando a Clipboard API com fallback, mostrando confirmação visual temporária que desaparece automaticamente; verificar manualmente que o clique copia o texto correto (colando em outro campo) e que a confirmação some sozinha após alguns segundos

## 4. Mobile-first e responsividade

- [x] 4.1 Escrever o CSS/SCSS da feature mobile-first (estilo base sem media query pensado para telas pequenas; toques com área mínima confortável; sem rolagem horizontal), e verificar em `ng serve` com o emulador de dispositivo do navegador em larguras como 360px e 390px que não há overflow horizontal nem elementos cortados
- [x] 4.2 Adicionar a media query `min-width` definida no design para telas maiores (largura máxima de conteúdo, respiro adicional), e verificar visualmente em uma largura de desktop (ex.: 1280px) que o layout continua coerente
- [x] 4.3 Revisar a tela como um todo (cabeçalho, resumo, busca, lista, copiar) em viewport mobile e confirmar que a experiência lembra um aplicativo (hierarquia visual clara, componentes Material consistentes, sem aparência de documento de texto solto)

## 5. Verificação final e documentação

- [x] 5.1 Rodar `npm run build` dentro de `frontend/` e verificar que o build de produção conclui sem erros, incluindo o carregamento correto do `boletos.json` como asset
- [x] 5.2 Servir o build de produção localmente (ex.: `npx http-server frontend/dist/frontend/browser` ou equivalente) e confirmar que a tela de boletos funciona no build final da mesma forma que no `ng serve`
- [x] 5.3 Confirmar que `index.html` e os PDFs de boletos na raiz do repositório permanecem inalterados (diff do git não mostra mudanças nesses arquivos)
- [x] 5.4 Atualizar `frontend/README.md` (ou a seção relevante do `README.md` raiz) mencionando a nova tela de boletos e registrando a limitação temporária de que os dados de exemplo em `boletos.json` ainda não são atualizados automaticamente pela skill `atualizar-boletos-mensais` (fica para uma change futura)
- [x] 5.5 Rodar `openspec validate build-boletos-page-angular-material --strict` e corrigir quaisquer erros apontados antes de considerar a change pronta para implementação
