import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EgressModule } from './components/egress/egress.module';

const routes: Routes = [
  {path:'auth', loadChildren:() => import('./components/auth/auth.module').then(m => m.AuthModule)},
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'egress',
    loadChildren:() => import('./components/egress/egress.module').then(m => m.EgressModule)
  },
  {
    path: 'income',
    loadChildren:() => import('./components/income/income.module').then(m => m.IncomeModule)
  },
  {
    path: 'product',
    loadChildren:() => import('./components/product/product.module').then(m => m.ProductModule)
  },
  {path:'**',redirectTo:'auth'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
