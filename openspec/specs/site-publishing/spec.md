# site-publishing Specification

## Purpose

Define o comportamento observável do que é efetivamente servido no link público já usado pelos moradores, e como o processo mensal de atualização de boletos se reflete nesse conteúdo publicado.

## Requirements

### Requirement: Link publicado serve a tela Angular de boletos
O link já em uso pelos moradores SHALL servir a tela de boletos construída em Angular + Angular Material (mesma tela verificada localmente na capability `boletos-page`), e não mais o `index.html` estático anterior.

#### Scenario: Acessar o link publicado mostra a tela Angular
- **WHEN** um morador acessa a URL publicada já em uso hoje
- **THEN** a página carregada é a tela de boletos em Angular + Material (cabeçalho, resumo, busca, listagem e cópia de linha digitável), funcionando sem erros

#### Scenario: URL publicada não muda
- **WHEN** a troca de conteúdo publicado é feita
- **THEN** a URL/domínio que os moradores já usam continua sendo o mesmo de antes, sem necessidade de compartilhar um novo link

### Requirement: Atualização mensal reflete no site publicado
O processo mensal de atualização de boletos (a partir do PDF da administradora) SHALL atualizar a fonte de dados consumida pelo site publicado, de forma que a próxima publicação mostre os boletos do novo mês.

#### Scenario: Rodar a atualização mensal altera os dados usados pelo site publicado
- **WHEN** o processo de atualização mensal de boletos é executado com o PDF de um novo mês
- **THEN** a fonte de dados que alimenta a tela publicada (mês, vencimento, valores, linhas digitáveis de cada unidade) reflete os dados desse novo PDF, sem exigir edição manual de HTML/JS

### Requirement: Conteúdo estático antigo não coexiste com a versão publicada
Depois da publicação da versão Angular, o link publicado SHALL servir apenas a versão Angular — não deve haver ambiguidade sobre qual versão (a antiga estática ou a nova Angular) está no ar.

#### Scenario: Não há duas versões concorrentes servidas no mesmo link
- **WHEN** o link publicado é acessado após a troca
- **THEN** não é possível, por esse mesmo link, chegar ao HTML estático antigo (ex.: como uma página alternativa ou cache desatualizado servido no lugar da versão Angular)
