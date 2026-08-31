---
name: analisar-extrato-asaas
description: Analisa um extrato bancário exportado do Asaas (CSV, ex.: "Extrato Asaas.csv") e produz um relatório organizado com resumo do período, cobranças recebidas por pagador, pagamentos de condomínio por unidade (Parque Tropical), outras transferências Pix enviadas por destinatário, e taxas cobradas pela plataforma. Use esta skill sempre que o usuário anexar ou referenciar um extrato/CSV do Asaas, ou pedir para "analisar o extrato", "resumo financeiro", "conferir o extrato", "quanto entrou e saiu", "para quem foram os Pix", "quanto foi pago de condomínio esse mês", mesmo que não diga exatamente essas palavras. Só se aplica a este projeto (conta Asaas usada para cobrar boletos das unidades do Parque Tropical e repassar os pagamentos de condomínio) — não usar em outros repositórios.
---

# Analisar extrato Asaas — Condomínio Parque Tropical

A conta Asaas usada neste projeto recebe as cobranças (boleto/Pix) enviadas
aos condôminos/inquilinos, paga a taxa de condomínio de cada unidade à
administradora (descrições `CONDOMINIO PQT MM/AAAA - <unidade>`) e repassa
valores a terceiros via Pix. Esta skill lê o CSV exportado do extrato Asaas
e organiza tudo isso em um relatório legível.

**Dados sensíveis**: o extrato contém nomes reais, valores e destinatários
de transferências. Trate como informação privada — não publique o relatório
como Artifact público nem o commite no repositório; apresente o resultado
diretamente na conversa (e salve em arquivo local, fora do controle de
versão, apenas se o usuário pedir explicitamente para guardar).

## Passo a passo

1. **Ache o CSV de origem.** Use o caminho que o usuário anexou/mencionou na
   conversa. Se ele só disser "o extrato" sem caminho, pergunte onde está o
   arquivo.

2. **Rode o script de análise** deste skill sobre o CSV:
   ```bash
   python3 .claude/skills/analisar-extrato-asaas/scripts/analisar_extrato.py "<caminho-do-csv>"
   ```
   Não precisa de nenhuma dependência além da biblioteca padrão do Python 3.
   A saída (stdout) é um relatório em Markdown já pronto, com:
   - resumo do período (saldo inicial/final, total de créditos/débitos,
     número de transações, e uma conferência automática entre a variação de
     saldo e a soma dos lançamentos);
   - cobranças recebidas, agrupadas por pagador;
   - pagamentos de condomínio, agrupados por unidade;
   - outros pagamentos de conta (o que não é taxa de condomínio);
   - transferências Pix enviadas, agrupadas por destinatário;
   - taxas da plataforma (boleto/cartão/Pix, mensalidade do plano,
     consultas Serasa);
   - uma seção de "outros tipos de transação" só aparece se houver um tipo
     de lançamento que o script não sabe categorizar — nesse caso, revise
     manualmente e, se for um tipo recorrente, ajuste o script para
     reconhecê-lo;
   - transações estornadas, se houver (a coluna "Transação estornada" do
     CSV vier preenchida).

3. **Se o script falhar** (erro para stderr, ex. "não encontrei a linha de
   cabeçalho"), o layout do CSV exportado pelo Asaas pode ter mudado — abra
   o arquivo bruto para conferir e ajuste
   `scripts/analisar_extrato.py` (a leitura do cabeçalho e os nomes das
   colunas) antes de tentar de novo.

4. **Apresente o relatório ao usuário** de forma direta na conversa,
   destacando o que for mais relevante ao pedido dele (ex.: se ele perguntou
   só sobre os pagamentos de condomínio, foque nessa seção, mas pode
   mencionar que o relatório completo está disponível). Se algo chamar
   atenção — divergência de conferência, transação estornada, um
   destinatário de Pix recebendo valores muito acima do padrão, taxa
   inesperada — aponte isso explicitamente, não deixe só nos números.

5. **Não publique nem commite os dados do extrato.** O CSV de origem e o
   relatório gerado ficam fora do controle de versão deste repositório —
   isso é dado financeiro real de terceiros, não conteúdo do projeto.
