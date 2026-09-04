import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { AcessoInfo } from './acesso.model';

const STORAGE_KEY = 'pqt-acesso-token';

@Injectable({ providedIn: 'root' })
export class AcessoService {
  private readonly http = inject(HttpClient);

  private readonly acesso$: Observable<AcessoInfo> = this.http
    .get<AcessoInfo>(`data/acesso.json?t=${Date.now()}`)
    .pipe(shareReplay(1));

  carregar(): Observable<AcessoInfo> {
    return this.acesso$;
  }

  sessaoValida(acesso: AcessoInfo): boolean {
    const guardado = this.tokenGuardado();
    if (!guardado || guardado !== acesso.token) {
      return false;
    }
    return new Date() < new Date(acesso.expiraEm);
  }

  registrarLogin(token: string): void {
    try {
      localStorage.setItem(STORAGE_KEY, token);
    } catch {
      // localStorage indisponível (ex.: navegação privada) — sessão não persiste entre recarregamentos.
    }
  }

  tokenGuardado(): string | null {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }
}
