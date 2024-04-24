import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { publicGuard } from './auth/guards/public.guard';
import { privateGuard } from './auth/guards/private.guard';

const routes: Routes = [
  {
    path: 'auth',
    canActivate:[privateGuard],
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule),
  },
  {
    path: 'dashboard',
    canActivate: [ publicGuard ],
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule),
  },
  {
    path: '**',
    redirectTo:  'auth'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash : true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
