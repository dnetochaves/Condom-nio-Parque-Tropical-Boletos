import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, shareReplay } from 'rxjs';
import { Boleto, BoletosMes } from './boleto.model';

function parseUnidade(unidade: string): [string, number] {
  const [prefixo, numero] = unidade.split(' ');
  return [prefixo, parseInt(numero, 10)];
}

function ordenarBoletos(boletos: Boleto[]): Boleto[] {
  return [...boletos].sort((a, b) => {
    const [prefixoA, numeroA] = parseUnidade(a.unidade);
    const [prefixoB, numeroB] = parseUnidade(b.unidade);
    return prefixoA.localeCompare(prefixoB) || numeroA - numeroB;
  });
}

@Injectable({ providedIn: 'root' })
export class BoletosService {
  private readonly http = inject(HttpClient);

  private readonly boletosMes$: Observable<BoletosMes> = this.http
    .get<BoletosMes>('data/boletos.json')
    .pipe(
      map((dados) => ({ ...dados, boletos: ordenarBoletos(dados.boletos) })),
      shareReplay(1)
    );

  carregar(): Observable<BoletosMes> {
    return this.boletosMes$;
  }
}
