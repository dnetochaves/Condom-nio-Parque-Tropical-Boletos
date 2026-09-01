import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { AcessoService } from './acesso.service';

export const authGuard: CanActivateFn = () => {
  const acessoService = inject(AcessoService);
  const router = inject(Router);

  return acessoService.carregar().pipe(
    map((acesso) => (acessoService.sessaoValida(acesso) ? true : router.createUrlTree(['/login']))),
    catchError(() => of(router.createUrlTree(['/login'])))
  );
};
