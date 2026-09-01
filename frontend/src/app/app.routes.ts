import { Routes } from '@angular/router';
import { BoletosPage } from './features/boletos/boletos-page';
import { DashboardPage } from './features/dashboard/dashboard-page';
import { DashboardOverviewPage } from './features/dashboard-overview/dashboard-overview-page';

export const routes: Routes = [
  { path: '', component: DashboardOverviewPage },
  { path: 'boletos', component: BoletosPage },
  { path: 'financeiro', component: DashboardPage },
  { path: '**', redirectTo: '' },
];
