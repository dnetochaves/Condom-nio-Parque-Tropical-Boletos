import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-dashboard-page',
  imports: [MatToolbarModule, MatCardModule, MatExpansionModule],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
})
export class DashboardPage {
  private readonly extratoService = inject(ExtratoService);

  protected readonly dados = toSignal(this.extratoService.carregar());

  protected readonly vista = computed(() => {
    const d = this.dados();
    if (!d) return null;
    return {
      d,
      totais: {
        cobrancas: d.cobrancas.reduce((soma, c) => soma + c.total, 0),
        condominio: d.condominioUnidades.reduce((soma, u) => soma + u.valor, 0),
        outros: d.outrosPagamentos.reduce((soma, p) => soma + p.valor, 0),
        pix: d.pixSaidas.reduce((soma, p) => soma + p.total, 0),
        taxas:
          d.taxas.boleto.total +
          d.taxas.asaas.total +
          d.taxas.serasa.reduce((soma, s) => soma + s.valor, 0),
      },
    };
  });

  protected brl(valor: number): string {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}
