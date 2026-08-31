import { Routes } from '@angular/router';
import { BoletosPage } from './features/boletos/boletos-page';
import { DashboardPage } from './features/dashboard/dashboard-page';

export const routes: Routes = [
  { path: '', component: BoletosPage },
  { path: 'financeiro', component: DashboardPage },
  { path: '**', redirectTo: '' },
];
