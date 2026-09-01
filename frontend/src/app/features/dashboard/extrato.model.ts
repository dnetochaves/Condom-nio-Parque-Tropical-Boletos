export interface TransacaoDetalhe {
  data: string;
  valor: number;
  tipoLancamento: string;
}

export interface CobrancaResumo {
  pagador: string;
  qtd: number;
  total: number;
  transacoes: TransacaoDetalhe[];
}

export interface CondominioUnidade {
  data: string;
  unidade: string;
  valor: number;
  tipoLancamento: string;
}

export interface OutroPagamento {
  data: string;
  descricao: string;
  valor: number;
  tipoLancamento: string;
}

export interface PixDestinatario {
  destinatario: string;
  qtd: number;
  total: number;
  transacoes: TransacaoDetalhe[];
}

export interface TaxaResumo {
  qtd: number;
  total: number;
  transacoes: TransacaoDetalhe[];
}

export interface SerasaConsulta {
  data: string;
  tipo: string;
  documento: string;
  valor: number;
}

export interface Taxas {
  boleto: TaxaResumo;
  asaas: TaxaResumo;
  serasa: SerasaConsulta[];
}

export interface OutroTipo {
  tipo: string;
  qtd: number;
  total: number;
}

export interface Estorno {
  data: string;
  descricao: string;
  valor: number;
}

export interface ExtratoFinanceiro {
  periodoInicio: string;
  periodoFim: string;
  saldoInicial: number;
  saldoFinal: number;
  variacao: number;
  totalCredito: number;
  totalDebito: number;
  qtdTransacoes: number;
  cobrancas: CobrancaResumo[];
  condominioUnidades: CondominioUnidade[];
  outrosPagamentos: OutroPagamento[];
  pixSaidas: PixDestinatario[];
  taxas: Taxas;
  outrosTipos: OutroTipo[];
  estornadas: Estorno[];
}
