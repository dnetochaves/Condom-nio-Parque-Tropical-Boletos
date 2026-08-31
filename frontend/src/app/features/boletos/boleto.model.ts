export interface Boleto {
  unidade: string;
  valor: number;
  documento: string;
  linhaDigitavel: string;
}

export interface BoletosMes {
  mes: string;
  condominio: string;
  pagador: string;
  vencimento: string;
  banco: string;
  boletos: Boleto[];
}
