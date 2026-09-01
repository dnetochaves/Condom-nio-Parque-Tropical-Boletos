import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { ExtratoService } from '../dashboard/extrato.service';
import { CondominioUnidade, ExtratoFinanceiro } from '../dashboard/extrato.model';
import { BoletosService } from '../boletos/boletos.service';

interface ItemBarra {
  rotulo: string;
  valor: number;
}

interface BlocoBarras {
  titulo: string;
  descricao: string;
  itens: ItemBarra[];
  maiorValor: number;
  mensagemVazia: string;
}

interface CategoriaSaida {
  categoria: string;
  valor: number;
  percentual: number;
  cor: string;
  inicio: number;
  fim: number;
}

// Cores fixas por categoria, escolhidas para ficarem claramente distintas entre si
// (--mat-sys-primary e --mat-sys-tertiary deste tema são dois tons de azul muito
// parecidos e prejudicam a leitura do gráfico de rosca por um usuário leigo).
const CORES_CATEGORIAS = {
  pix: 'light-dark(#005cbb, #abc7ff)',
  repasses: 'light-dark(#006d3c, #6dddaa)',
  outros: 'light-dark(#8a5300, #f0bd6c)',
  taxas: 'var(--mat-sys-error)',
};

@Component({
  selector: 'app-dashboard-overview-page',
  imports: [MatToolbarModule, MatCardModule],
  templateUrl: './dashboard-overview-page.html',
  styleUrl: './dashboard-overview-page.scss',
})
export class DashboardOverviewPage {
  private readonly extratoService = inject(ExtratoService);
  private readonly boletosService = inject(BoletosService);

  protected readonly extrato = toSignal(this.extratoService.carregar());
  protected readonly boletosMes = toSignal(this.boletosService.carregar());

  protected readonly vista = computed(() => {
    const extrato = this.extrato();
    const boletosMes = this.boletosMes();
    if (!extrato || !boletosMes) return null;

    const kpis = {
      qtdBoletos: boletosMes.boletos.length,
      valorBoletos: boletosMes.boletos.reduce((soma, b) => soma + b.valor, 0),
      totalRecebido: extrato.totalCredito,
      totalTaxas:
        extrato.taxas.boleto.total +
        extrato.taxas.asaas.total +
        extrato.taxas.serasa.reduce((soma, s) => soma + s.valor, 0),
    };

    const pixPorDestinatario = agregarPixPorDestinatario(extrato);
    const repassesPorUnidade = agregarRepassesPorUnidade(extrato.condominioUnidades);
    const cobrancasPorPagador = agregarCobrancasPorPagador(extrato);

    const blocosBarras: BlocoBarras[] = [
      {
        titulo: 'Pix enviados por destinatário',
        descricao: 'Para quem foram os Pix enviados pelo condomínio neste período.',
        itens: pixPorDestinatario,
        maiorValor: pixPorDestinatario[0]?.valor ?? 0,
        mensagemVazia: 'Nenhum Pix enviado neste período.',
      },
      {
        titulo: 'Repasses por unidade',
        descricao: 'Quanto foi repassado para cada unidade neste período.',
        itens: repassesPorUnidade,
        maiorValor: repassesPorUnidade[0]?.valor ?? 0,
        mensagemVazia: 'Nenhum repasse por unidade registrado neste período.',
      },
      {
        titulo: 'Cobranças recebidas por pagador',
        descricao: 'Quanto cada pagador pagou ao condomínio neste período.',
        itens: cobrancasPorPagador,
        maiorValor: cobrancasPorPagador[0]?.valor ?? 0,
        mensagemVazia: 'Nenhuma cobrança recebida neste período.',
      },
    ];

    const resumoSaidas = calcularResumoSaidas(extrato, kpis.totalTaxas);

    return { boletosMes, extrato, kpis, blocosBarras, resumoSaidas };
  });

  protected brl(valor: number): string {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  protected percentual(valor: number, maiorValor: number): number {
    return maiorValor > 0 ? (valor / maiorValor) * 100 : 0;
  }

  protected arredondar(valor: number): number {
    return Math.round(valor);
  }

  protected roscaGradiente(categorias: CategoriaSaida[]): string {
    if (!categorias.length) return 'none';
    const paradas = categorias.map((c) => `${c.cor} ${c.inicio}% ${c.fim}%`).join(', ');
    return `conic-gradient(${paradas})`;
  }
}

export function agregarRepassesPorUnidade(condominioUnidades: CondominioUnidade[]): ItemBarra[] {
  const porUnidade = new Map<string, number>();
  for (const u of condominioUnidades) {
    porUnidade.set(u.unidade, (porUnidade.get(u.unidade) ?? 0) + Math.abs(u.valor));
  }
  return [...porUnidade.entries()]
    .map(([unidade, valor]) => ({ rotulo: unidade, valor }))
    .sort((a, b) => b.valor - a.valor);
}

export function agregarPixPorDestinatario(extrato: ExtratoFinanceiro): ItemBarra[] {
  return extrato.pixSaidas
    .map((p) => ({ rotulo: p.destinatario, valor: Math.abs(p.total) }))
    .sort((a, b) => b.valor - a.valor);
}

export function agregarCobrancasPorPagador(extrato: ExtratoFinanceiro): ItemBarra[] {
  return extrato.cobrancas
    .map((c) => ({ rotulo: c.pagador, valor: c.total }))
    .sort((a, b) => b.valor - a.valor);
}

export function calcularResumoSaidas(extrato: ExtratoFinanceiro, totalTaxas: number): CategoriaSaida[] {
  const totalPix = extrato.pixSaidas.reduce((soma, p) => soma + Math.abs(p.total), 0);
  const totalRepasses = extrato.condominioUnidades.reduce((soma, u) => soma + Math.abs(u.valor), 0);
  const totalOutros = extrato.outrosPagamentos.reduce((soma, p) => soma + Math.abs(p.valor), 0);

  const brutas = [
    { categoria: 'Pix enviados', valor: totalPix, cor: CORES_CATEGORIAS.pix },
    { categoria: 'Repasses de condomínio', valor: totalRepasses, cor: CORES_CATEGORIAS.repasses },
    { categoria: 'Outros pagamentos', valor: totalOutros, cor: CORES_CATEGORIAS.outros },
    { categoria: 'Taxas da plataforma', valor: Math.abs(totalTaxas), cor: CORES_CATEGORIAS.taxas },
  ].filter((c) => c.valor > 0);

  const somaTotal = brutas.reduce((soma, c) => soma + c.valor, 0);

  let acumulado = 0;
  return brutas.map((c) => {
    const percentual = somaTotal > 0 ? (c.valor / somaTotal) * 100 : 0;
    const inicio = acumulado;
    acumulado += percentual;
    return { ...c, percentual, inicio, fim: acumulado };
  });
}
