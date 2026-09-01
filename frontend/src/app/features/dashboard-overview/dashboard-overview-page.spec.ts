import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { DashboardOverviewPage, agregarRepassesPorUnidade } from './dashboard-overview-page';
import { ExtratoFinanceiro } from '../dashboard/extrato.model';
import { BoletosMes } from '../boletos/boleto.model';

const extratoMock: ExtratoFinanceiro = {
  periodoInicio: '01/08/2026',
  periodoFim: '31/08/2026',
  saldoInicial: 100,
  saldoFinal: 200,
  variacao: 100,
  totalCredito: 5000,
  totalDebito: 4900,
  qtdTransacoes: 10,
  cobrancas: [],
  condominioUnidades: [
    { data: '05/08/2026', unidade: 'Bloco A 101', valor: -300, tipoLancamento: 'PAGAMENTO DO CONDOMINIO' },
    { data: '10/08/2026', unidade: 'Bloco A 101', valor: -50, tipoLancamento: 'PAGAMENTO DO CONDOMINIO' },
    { data: '06/08/2026', unidade: 'Bloco B 202', valor: -400, tipoLancamento: 'PAGAMENTO DO CONDOMINIO' },
  ],
  outrosPagamentos: [],
  pixSaidas: [],
  taxas: {
    boleto: { qtd: 5, total: 25, transacoes: [] },
    asaas: { qtd: 1, total: 10, transacoes: [] },
    serasa: [{ data: '02/08/2026', tipo: 'CPF', documento: '123', valor: 5 }],
  },
  outrosTipos: [],
  estornadas: [],
};

const boletosMock: BoletosMes = {
  mes: 'Setembro/2026',
  condominio: 'Parque Tropical',
  pagador: 'Condomínio',
  vencimento: '10/09/2026',
  banco: 'Banco X',
  boletos: [
    { unidade: 'Bloco A 101', valor: 350, documento: '1', linhaDigitavel: '111' },
    { unidade: 'Bloco B 202', valor: 400, documento: '2', linhaDigitavel: '222' },
  ],
};

describe('DashboardOverviewPage', () => {
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardOverviewPage],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('shows no KPIs while data is still loading', () => {
    const fixture = TestBed.createComponent(DashboardOverviewPage);
    fixture.detectChanges();
    expect(fixture.componentInstance['vista']()).toBeNull();
    httpMock.match(() => true);
  });

  it('computes KPIs and unit aggregation once data is loaded', () => {
    const fixture = TestBed.createComponent(DashboardOverviewPage);
    fixture.detectChanges();

    httpMock.expectOne('data/extrato-financeiro.json').flush(extratoMock);
    httpMock.expectOne('data/boletos.json').flush(boletosMock);
    fixture.detectChanges();

    const vista = fixture.componentInstance['vista']();
    expect(vista).not.toBeNull();
    expect(vista!.kpis.qtdBoletos).toBe(2);
    expect(vista!.kpis.valorBoletos).toBe(750);
    expect(vista!.kpis.totalRecebido).toBe(5000);
    expect(vista!.kpis.totalTaxas).toBe(40);

    expect(vista!.repassesPorUnidade).toEqual([
      { unidade: 'Bloco B 202', valor: 400 },
      { unidade: 'Bloco A 101', valor: 350 },
    ]);
  });

  it('shows the empty-state message instead of a chart when there is no repasse data', () => {
    const fixture = TestBed.createComponent(DashboardOverviewPage);
    fixture.detectChanges();

    httpMock.expectOne('data/extrato-financeiro.json').flush({ ...extratoMock, condominioUnidades: [] });
    httpMock.expectOne('data/boletos.json').flush(boletosMock);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.grafico__barras')).toBeNull();
    expect(compiled.querySelector('.grafico__vazio')?.textContent).toContain('Nenhum repasse por unidade');
  });
});

describe('agregarRepassesPorUnidade', () => {
  it('sums repeated units by absolute value and sorts descending', () => {
    const resultado = agregarRepassesPorUnidade([
      { data: '01/08/2026', unidade: 'Bloco A 101', valor: -300, tipoLancamento: 'PAGAMENTO DO CONDOMINIO' },
      { data: '02/08/2026', unidade: 'Bloco A 101', valor: -50, tipoLancamento: 'PAGAMENTO DO CONDOMINIO' },
      { data: '03/08/2026', unidade: 'Bloco B 202', valor: -400, tipoLancamento: 'PAGAMENTO DO CONDOMINIO' },
    ]);

    expect(resultado).toEqual([
      { unidade: 'Bloco B 202', valor: 400 },
      { unidade: 'Bloco A 101', valor: 350 },
    ]);
  });

  it('returns an empty list when there is no repasse data', () => {
    expect(agregarRepassesPorUnidade([])).toEqual([]);
  });
});
