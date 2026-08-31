---
name: atualizar-boletos-mensais
description: Atualiza os dados de boletos deste projeto (Condomínio Parque Tropical) com os boletos de um novo mês, a partir do PDF de boletos enviado pela administradora (ex.: "Boletos taxa condominial 08.2026 - permutante.pdf"). Use esta skill sempre que o usuário anexar ou referenciar um novo PDF de boletos do condomínio, ou pedir para "atualizar os boletos", "gerar/subir os boletos do mês", "atualizar o site com o novo boleto", trocar o vencimento/valores do mês, mesmo que não diga exatamente essas palavras. Só se aplica a este projeto — não usar em outros repositórios.
---

# Atualizar boletos mensais — Condomínio Parque Tropical

Este projeto é um app [Angular](https://angular.dev/) com [Angular Material](https://material.angular.dev/)
que lista os boletos do mês de um condômino (Pompeu Fusco Angelico), um por
unidade, com valor, número do documento e linha digitável copiável. Os dados
que alimentam essa tela ficam em `frontend/public/data/boletos.json`. Todo mês
a administradora manda um PDF novo com os boletos daquele mês, e esse JSON
precisa ser atualizado para refletir os dados desse PDF — e o site publicado
precisa ser republicado para que a atualização chegue aos moradores.

O PDF é um lote gerado pelo banco: 2 páginas por unidade (a primeira com o
"Recibo do Pagador" — valor, nosso número, número do documento e linha
digitável — e a segunda uma capa/envelope com a unidade e o vencimento em
formato limpo). O layout se repete mês a mês, então a extração é mecânica.

## Passo a passo

1. **Ache o PDF de origem.** Se o usuário anexou/mencionou um caminho de
   arquivo na conversa, use-o. Caso contrário, procure na raiz do projeto por
   arquivos `Boletos taxa condominial*.pdf` (`ls -t` para pegar o mais
   recente) e confirme com o usuário qual usar se houver mais de um.

2. **Rode o script de extração** deste skill sobre o PDF, redirecionando a
   saída direto para o arquivo de dados do app:
   ```bash
   python3 .claude/skills/atualizar-boletos-mensais/scripts/extract_boletos.py "<caminho-do-pdf>" > frontend/public/data/boletos.json
   ```
   Se faltar a dependência, ele avisa para rodar `pip3 install pdfplumber` —
   instale e rode de novo. O script já escreve o JSON final no formato
   `{ mes, condominio, pagador, vencimento, banco, boletos: [...] }` — não
   edite esse arquivo manualmente. No stderr (visível no terminal) vem uma
   linha de resumo com total de boletos, vencimento e valor total, além de
   avisos sobre páginas incompletas ou vencimentos divergentes entre
   unidades — leia-os antes de seguir; eles indicam que algo no PDF fugiu do
   padrão esperado e vale checar manualmente antes de confiar no resultado.

3. **Confira a extração antes de publicar.** O número de boletos normalmente
   é 29 (uma unidade fixa por mês). Se vier diferente, avise o usuário — pode
   ser unidade nova/removida da lista, ou um erro de extração — antes de
   seguir. Valide também que o JSON é válido:
   ```bash
   node -e "JSON.parse(require('fs').readFileSync('frontend/public/data/boletos.json'))"
   ```

4. **Publique o site atualizado** rodando o script de publicação, que builda
   o app Angular (já lendo o `boletos.json` atualizado) e copia o resultado
   para a raiz do repositório, no lugar dos arquivos publicados
   anteriormente:
   ```bash
   ./scripts/publish-site.sh
   ```

5. **Verifique o resultado.** Sirva a raiz do repositório localmente (ex.
   `npx http-server .`) e abra no navegador da sessão para conferir
   visualmente que a tela carrega com os novos valores, o resumo (contagem e
   total) bate com o resumo do passo 2, e nenhum erro aparece no console.

6. **Não faça commit nem push automaticamente.** Depois de atualizar,
   publicar e verificar, informe o que mudou (mês, vencimento, total, nº de
   boletos) e pergunte se o usuário quer que você faça o commit — só rode
   `git commit` / `git push` se ele confirmar. Lembre o usuário de que, após
   o push, o Railway precisa terminar de reimplantar e ele deve conferir o
   link publicado para confirmar que a atualização chegou ao ar.

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
