import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import {
  DashboardOverviewPage,
  agregarCobrancasPorPagador,
  agregarPixPorDestinatario,
  agregarRepassesPorUnidade,
  calcularResumoSaidas,
} from './dashboard-overview-page';
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
  cobrancas: [{ pagador: 'Fulano', qtd: 1, total: 1000, transacoes: [] }],
  condominioUnidades: [
    { data: '05/08/2026', unidade: 'Bloco A 101', valor: -300, tipoLancamento: 'PAGAMENTO DO CONDOMINIO' },
    { data: '10/08/2026', unidade: 'Bloco A 101', valor: -50, tipoLancamento: 'PAGAMENTO DO CONDOMINIO' },
    { data: '06/08/2026', unidade: 'Bloco B 202', valor: -400, tipoLancamento: 'PAGAMENTO DO CONDOMINIO' },
  ],
  outrosPagamentos: [{ data: '07/08/2026', descricao: 'Anúncio', valor: -50, tipoLancamento: 'SITE ANUNCIOS' }],
  pixSaidas: [{ destinatario: 'Ciclano', qtd: 1, total: -200, transacoes: [] }],
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

function blocoPorTitulo(compiled: HTMLElement, titulo: string): HTMLElement {
  const titulos = Array.from(compiled.querySelectorAll('.bloco-grafico__titulo'));
  const el = titulos.find((t) => t.textContent?.trim() === titulo);
  if (!el) throw new Error(`Bloco "${titulo}" não encontrado`);
  return el.closest('mat-card') as HTMLElement;
}

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

  it('computes KPIs and chart data once data is loaded', () => {
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

    const [pix, repasses, cobrancas] = vista!.blocosBarras;
    expect(pix.titulo).toBe('Pix enviados por destinatário');
    expect(pix.itens).toEqual([{ rotulo: 'Ciclano', valor: 200 }]);

    expect(repasses.titulo).toBe('Repasses por unidade');
    expect(repasses.itens).toEqual([
      { rotulo: 'Bloco B 202', valor: 400 },
      { rotulo: 'Bloco A 101', valor: 350 },
    ]);

    expect(cobrancas.titulo).toBe('Cobranças recebidas por pagador');
    expect(cobrancas.itens).toEqual([{ rotulo: 'Fulano', valor: 1000 }]);

    const somaPercentuais = vista!.resumoSaidas.reduce((soma, c) => soma + c.percentual, 0);
    expect(somaPercentuais).toBeCloseTo(100, 5);
    expect(vista!.resumoSaidas.map((c) => c.categoria)).toEqual([
      'Pix enviados',
      'Repasses de condomínio',
      'Outros pagamentos',
      'Taxas da plataforma',
    ]);
  });

  it('shows the empty-state message instead of a chart when there is no repasse data', () => {
    const fixture = TestBed.createComponent(DashboardOverviewPage);
    fixture.detectChanges();

    httpMock.expectOne('data/extrato-financeiro.json').flush({ ...extratoMock, condominioUnidades: [] });
    httpMock.expectOne('data/boletos.json').flush(boletosMock);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const bloco = blocoPorTitulo(compiled, 'Repasses por unidade');
    expect(bloco.querySelector('.grafico__barras')).toBeNull();
    expect(bloco.querySelector('.bloco-grafico__vazio')?.textContent).toContain('Nenhum repasse por unidade');
  });

  it('shows the empty-state message instead of a chart when there is no pix data', () => {
    const fixture = TestBed.createComponent(DashboardOverviewPage);
    fixture.detectChanges();

    httpMock.expectOne('data/extrato-financeiro.json').flush({ ...extratoMock, pixSaidas: [] });
    httpMock.expectOne('data/boletos.json').flush(boletosMock);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const bloco = blocoPorTitulo(compiled, 'Pix enviados por destinatário');
    expect(bloco.querySelector('.grafico__barras')).toBeNull();
    expect(bloco.querySelector('.bloco-grafico__vazio')?.textContent).toContain('Nenhum Pix enviado');
  });

  it('shows the empty-state message instead of the rosca when there is no saída data', () => {
    const fixture = TestBed.createComponent(DashboardOverviewPage);
    fixture.detectChanges();

    httpMock.expectOne('data/extrato-financeiro.json').flush({
      ...extratoMock,
      condominioUnidades: [],
      outrosPagamentos: [],
      pixSaidas: [],
      taxas: {
        boleto: { qtd: 0, total: 0, transacoes: [] },
        asaas: { qtd: 0, total: 0, transacoes: [] },
        serasa: [],
      },
    });
    httpMock.expectOne('data/boletos.json').flush(boletosMock);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const bloco = blocoPorTitulo(compiled, 'Para onde foi o dinheiro');
    expect(bloco.querySelector('.rosca-container')).toBeNull();
    expect(bloco.querySelector('.bloco-grafico__vazio')?.textContent).toContain('Nenhuma saída registrada');
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
      { rotulo: 'Bloco B 202', valor: 400 },
      { rotulo: 'Bloco A 101', valor: 350 },
    ]);
  });

  it('returns an empty list when there is no repasse data', () => {
    expect(agregarRepassesPorUnidade([])).toEqual([]);
  });
});

describe('agregarPixPorDestinatario', () => {
  it('maps pixSaidas to absolute-valued, sorted bar items', () => {
    const resultado = agregarPixPorDestinatario({
      ...extratoMock,
      pixSaidas: [
        { destinatario: 'A', qtd: 1, total: -100, transacoes: [] },
        { destinatario: 'B', qtd: 1, total: -500, transacoes: [] },
      ],
    });

    expect(resultado).toEqual([
      { rotulo: 'B', valor: 500 },
      { rotulo: 'A', valor: 100 },
    ]);
  });

  it('returns an empty list when there is no pix data', () => {
    expect(agregarPixPorDestinatario({ ...extratoMock, pixSaidas: [] })).toEqual([]);
  });
});

describe('agregarCobrancasPorPagador', () => {
  it('maps cobrancas to sorted bar items without altering the sign', () => {
    const resultado = agregarCobrancasPorPagador({
      ...extratoMock,
      cobrancas: [
        { pagador: 'A', qtd: 1, total: 100, transacoes: [] },
        { pagador: 'B', qtd: 1, total: 500, transacoes: [] },
      ],
    });

    expect(resultado).toEqual([
      { rotulo: 'B', valor: 500 },
      { rotulo: 'A', valor: 100 },
    ]);
  });

  it('returns an empty list when there is no cobranca data', () => {
    expect(agregarCobrancasPorPagador({ ...extratoMock, cobrancas: [] })).toEqual([]);
  });
});

describe('calcularResumoSaidas', () => {
  it('computes value and percentual for each non-zero category', () => {
    const resultado = calcularResumoSaidas(extratoMock, 40);

    expect(resultado.map((c) => ({ categoria: c.categoria, valor: c.valor }))).toEqual([
      { categoria: 'Pix enviados', valor: 200 },
      { categoria: 'Repasses de condomínio', valor: 750 },
      { categoria: 'Outros pagamentos', valor: 50 },
      { categoria: 'Taxas da plataforma', valor: 40 },
    ]);
    const somaPercentuais = resultado.reduce((soma, c) => soma + c.percentual, 0);
    expect(somaPercentuais).toBeCloseTo(100, 5);
  });

  it('omits categories with zero value', () => {
    const resultado = calcularResumoSaidas({ ...extratoMock, outrosPagamentos: [] }, 40);
    expect(resultado.map((c) => c.categoria)).not.toContain('Outros pagamentos');
  });

  it('returns an empty list when every category is zero', () => {
    const resultado = calcularResumoSaidas(
      { ...extratoMock, condominioUnidades: [], outrosPagamentos: [], pixSaidas: [] },
      0
    );
    expect(resultado).toEqual([]);
  });
});
