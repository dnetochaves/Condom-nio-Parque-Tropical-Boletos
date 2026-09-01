import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { of } from 'rxjs';
import { App } from './app';
import { routes } from './app.routes';
import { AcessoService } from './features/login/acesso.service';
import { AcessoInfo } from './features/login/acesso.model';

function fakeAcessoService(
  sessaoValida: boolean
): Pick<AcessoService, 'carregar' | 'sessaoValida' | 'tokenGuardado'> {
  const acesso: AcessoInfo = { token: 'token-de-teste', geradoEm: '', expiraEm: '' };
  return {
    carregar: () => of(acesso),
    sessaoValida: () => sessaoValida,
    tokenGuardado: () => null,
  };
}

async function criarApp(sessaoValida: boolean) {
  await TestBed.configureTestingModule({
    imports: [App],
    providers: [provideRouter(routes), { provide: AcessoService, useValue: fakeAcessoService(sessaoValida) }],
  }).compileComponents();
  return TestBed.createComponent(App);
}

describe('App', () => {
  it('should create the app', async () => {
    const fixture = await criarApp(false);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('hides the bottom navigation while on the login screen', async () => {
    const fixture = await criarApp(false);
    const router = TestBed.inject(Router);

    await router.navigateByUrl('/login');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.app-shell__nav-item').length).toBe(0);
  });

  it('redirects to login when there is no valid session', async () => {
    const fixture = await criarApp(false);
    const router = TestBed.inject(Router);

    await router.navigateByUrl('/boletos');
    fixture.detectChanges();

    expect(router.url).toBe('/login');
  });

  it('shows the bottom navigation with all three tabs once authenticated', async () => {
    const fixture = await criarApp(true);
    const router = TestBed.inject(Router);

    await router.navigateByUrl('/');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.app-shell__nav-item').length).toBe(3);
  });
});
