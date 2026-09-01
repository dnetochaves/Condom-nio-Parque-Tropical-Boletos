import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { ExtratoService } from '../dashboard/extrato.service';
import { CondominioUnidade } from '../dashboard/extrato.model';
import { BoletosService } from '../boletos/boletos.service';

interface UnidadeAgregada {
  unidade: string;
  valor: number;
}

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

    const repassesPorUnidade = agregarRepassesPorUnidade(extrato.condominioUnidades);
    const maiorValor = repassesPorUnidade[0]?.valor ?? 0;

    return { boletosMes, extrato, kpis, repassesPorUnidade, maiorValor };
  });

  protected brl(valor: number): string {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  protected percentual(valor: number, maiorValor: number): number {
    return maiorValor > 0 ? (valor / maiorValor) * 100 : 0;
  }
}

export function agregarRepassesPorUnidade(condominioUnidades: CondominioUnidade[]): UnidadeAgregada[] {
  const porUnidade = new Map<string, number>();
  for (const u of condominioUnidades) {
    porUnidade.set(u.unidade, (porUnidade.get(u.unidade) ?? 0) + Math.abs(u.valor));
  }
  return [...porUnidade.entries()]
    .map(([unidade, valor]) => ({ unidade, valor }))
    .sort((a, b) => b.valor - a.valor);
}
