import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { ExtratoFinanceiro } from './extrato.model';

@Injectable({ providedIn: 'root' })
export class ExtratoService {
  private readonly http = inject(HttpClient);

  private readonly extrato$: Observable<ExtratoFinanceiro> = this.http
    .get<ExtratoFinanceiro>('data/extrato-financeiro.json')
    .pipe(shareReplay(1));

  carregar(): Observable<ExtratoFinanceiro> {
    return this.extrato$;
  }
}
