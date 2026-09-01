import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AcessoService } from './acesso.service';

@Component({
  selector: 'app-login-page',
  imports: [MatToolbarModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  private readonly acessoService = inject(AcessoService);
  private readonly router = inject(Router);

  protected readonly dados = toSignal(this.acessoService.carregar());
  protected readonly erro = signal<string | null>(null);

  protected readonly mensagemInicial = computed(() => {
    const guardado = this.acessoService.tokenGuardado();
    if (!guardado) {
      return null;
    }
    const dados = this.dados();
    if (!dados) {
      return null;
    }
    return this.acessoService.sessaoValida(dados)
      ? null
      : 'Seu token de acesso expirou. Solicite um novo token.';
  });

  protected entrar(tokenDigitado: string): void {
    const dados = this.dados();
    if (!dados) {
      this.erro.set('Não foi possível carregar as informações de acesso. Tente novamente em instantes.');
      return;
    }

    const token = tokenDigitado.trim();
    if (token !== dados.token) {
      this.erro.set('Token incorreto.');
      return;
    }

    if (new Date() >= new Date(dados.expiraEm)) {
      this.erro.set('Este token expirou. Solicite um novo token.');
      return;
    }

    this.acessoService.registrarLogin(token);
    this.erro.set(null);
    this.router.navigateByUrl('/');
  }
}
