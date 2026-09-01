import { Routes } from '@angular/router';
import { BoletosPage } from './features/boletos/boletos-page';
import { DashboardPage } from './features/dashboard/dashboard-page';
import { DashboardOverviewPage } from './features/dashboard-overview/dashboard-overview-page';
import { LoginPage } from './features/login/login-page';
import { authGuard } from './features/login/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginPage },
  { path: '', component: DashboardOverviewPage, canActivate: [authGuard] },
  { path: 'boletos', component: BoletosPage, canActivate: [authGuard] },
  { path: 'financeiro', component: DashboardPage, canActivate: [authGuard] },
  { path: '**', redirectTo: '' },
];
