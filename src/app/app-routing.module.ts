import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/monitor' },
  { path: 'control', loadChildren: () => import('./pages/control/control.module').then(m => m.ControlModule) },
  { path: 'monitor', loadChildren: () => import('./pages/monitor/monitor.module').then(m => m.MonitorModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
