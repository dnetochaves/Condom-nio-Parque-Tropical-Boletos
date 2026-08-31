import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BoletosService } from './boletos.service';
import { Boleto } from './boleto.model';

@Component({
  selector: 'app-boletos-page',
  imports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './boletos-page.html',
  styleUrl: './boletos-page.scss',
})
export class BoletosPage {
  private readonly boletosService = inject(BoletosService);

  protected readonly dados = toSignal(this.boletosService.carregar());
  protected readonly busca = signal('');
  protected readonly copiadoId = signal<string | null>(null);

  protected readonly boletosFiltrados = computed(() => {
    const dados = this.dados();
    if (!dados) return [];
    const filtro = this.busca().trim().toLowerCase();
    if (!filtro) return dados.boletos;
    return dados.boletos.filter((b) => b.unidade.toLowerCase().includes(filtro));
  });

  protected readonly totalBoletos = computed(() => this.dados()?.boletos.length ?? 0);
  protected readonly totalValor = computed(() =>
    (this.dados()?.boletos ?? []).reduce((soma, b) => soma + b.valor, 0)
  );

  protected formatarMoeda(valor: number): string {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  protected formatarData(iso: string): string {
    const [ano, mes, dia] = iso.split('-');
    return `${dia}/${mes}/${ano}`;
  }

  protected async copiar(boleto: Boleto): Promise<void> {
    const texto = boleto.linhaDigitavel;
    try {
      await navigator.clipboard.writeText(texto);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = texto;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    this.copiadoId.set(boleto.documento);
    setTimeout(() => {
      if (this.copiadoId() === boleto.documento) {
        this.copiadoId.set(null);
      }
    }, 1500);
  }
}
