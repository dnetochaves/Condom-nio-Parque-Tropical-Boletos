---
name: atualizar-boletos-mensais
description: Atualiza o index.html deste projeto (Condomínio Parque Tropical) com os boletos de um novo mês, a partir do PDF de boletos enviado pela administradora (ex.: "Boletos taxa condominial 08.2026 - permutante.pdf"). Use esta skill sempre que o usuário anexar ou referenciar um novo PDF de boletos do condomínio, ou pedir para "atualizar os boletos", "gerar/subir os boletos do mês", "atualizar o index.html com o novo boleto", trocar o vencimento/valores do mês, mesmo que não diga exatamente essas palavras. Só se aplica a este projeto — não usar em outros repositórios.
---

# Atualizar boletos mensais — Condomínio Parque Tropical

Este projeto é uma página estática (`index.html`) que lista os boletos do mês
de um condômino (Pompeu Fusco Angelico), um por unidade, com valor, número do
documento e linha digitável copiável. Todo mês a administradora manda um PDF
novo com os boletos daquele mês, e o `index.html` precisa ser atualizado para
refletir os dados desse PDF.

O PDF é um lote gerado pelo banco: 2 páginas por unidade (a primeira com o
"Recibo do Pagador" — valor, nosso número, número do documento e linha
digitável — e a segunda uma capa/envelope com a unidade e o vencimento em
formato limpo). O layout se repete mês a mês, então a extração é mecânica.

## Passo a passo

1. **Ache o PDF de origem.** Se o usuário anexou/mencionou um caminho de
   arquivo na conversa, use-o. Caso contrário, procure na raiz do projeto por
   arquivos `Boletos taxa condominial*.pdf` (`ls -t` para pegar o mais
   recente) e confirme com o usuário qual usar se houver mais de um.

2. **Rode o script de extração** deste skill sobre o PDF:
   ```bash
   python3 .claude/skills/atualizar-boletos-mensais/scripts/extract_boletos.py "<caminho-do-pdf>"
   ```
   Se faltar a dependência, ele avisa para rodar `pip3 install pdfplumber` —
   instale e rode de novo. A saída traz:
   - uma linha de resumo com total de boletos, vencimento e valor total;
   - o bloco `const boletos = [...]` já pronto, ordenado por prefixo da
     unidade e depois por número (mesma ordenação que o `index.html` usa);
   - uma linha JSON final `{"count": ..., "total": ..., "vencimento": ...}`.

   Avisos sobre páginas incompletas ou vencimentos divergentes entre unidades
   vão para stderr — leia-os antes de seguir; eles indicam que algo no PDF
   fugiu do padrão esperado e vale checar manualmente antes de confiar no
   resultado.

3. **Confira a extração antes de editar.** O número de boletos normalmente é
   29 (uma unidade fixa por mês). Se vier diferente, avise o usuário — pode
   ser unidade nova/removida da lista, ou um erro de extração — antes de
   aplicar a mudança.

4. **Leia o `index.html` atual** para saber exatamente o que precisa ser
   substituído (os valores mudam a cada mês, então não assuma os valores
   antigos — confira o arquivo). Os pontos a atualizar são:
   - `<title>Boletos <Mês> <Ano> - Pompeu</title>`
   - `<h1>Boletos <Mês> <Ano> — Condomínio Parque Tropical</h1>`
   - `<p>Vencimento: DD/MM/AAAA &nbsp;•&nbsp; Banco 481-2</p>`
   - `<span>N boletos</span>` e `<span class="total-val" ...>R$ ...</span>`
     dentro de `.summary`
   - o array `const boletos = [...]` inteiro (substitua pelo bloco gerado
     pelo script)
   - a string `Venc. DD/MM/AAAA` dentro do template literal de `render()`
     (é fixa por mês, igual ao cabeçalho)

   Para o nome do mês em português, use a data de vencimento retornada pelo
   script (mês/ano no formato `DD/MM/AAAA`):
   `01 Janeiro, 02 Fevereiro, 03 Março, 04 Abril, 05 Maio, 06 Junho,
   07 Julho, 08 Agosto, 09 Setembro, 10 Outubro, 11 Novembro, 12 Dezembro`.

5. **Aplique as edições** com a ferramenta de edição de arquivo, não reescreva
   o arquivo inteiro — só os trechos que mudam (estilo, estrutura e lógica de
   busca/ordenação/cópia do `index.html` não devem ser tocados).

6. **Verifique o resultado**: some os valores do array atualizado e confira
   que bate com o total mostrado no resumo do script, e que o total exibido
   no `.summary` do HTML foi atualizado. Se possível, abra o `index.html` no
   navegador da sessão para conferir visualmente que os cartões renderizam
   com os novos valores e nenhum erro aparece no console.

7. **Não faça commit nem push automaticamente.** Depois de atualizar e
   verificar, informe o que mudou (mês, vencimento, total, nº de boletos) e
   pergunte se o usuário quer que você faça o commit — só rode `git commit`
   / `git push` se ele confirmar, seguindo o mesmo padrão usado nas
   atualizações anteriores deste projeto.

## Notas sobre o formato do PDF

Os regexes do script assumem estes trechos fixos do layout do banco 481-2:
- `Unidade:XX 9999` (duas letras + até 4 dígitos, com ou sem espaço)
- bloco `Data Docto.` seguido por `Número Documento` na linha seguinte
- linha digitável no formato `48190.00003 00495.890568 66678.170144 5 15290000154732`
- `Valor Mora / Multa / Juros` seguido por `Valor Total Cobrado` e o valor na
  linha de baixo
- `Vencimento:DD/MM/AAAA` na página de capa (segunda página do par)

Se a administradora ou o banco mudarem o layout do boleto, o script vai
avisar (nenhum boleto extraído, ou muitos avisos de página incompleta) em vez
de gerar dados errados silenciosamente — nesse caso, ajuste os regexes em
`scripts/extract_boletos.py` olhando o texto bruto de uma página
(`pdfplumber` → `page.extract_text()`) antes de tentar de novo.
