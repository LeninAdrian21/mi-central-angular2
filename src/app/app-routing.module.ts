import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'auth', loadChildren: () => import('./modules/auth/auth.module').then(m=>m.AuthModule)},
  {path:'home', loadChildren: () => import('./modules/nav/pages/home/home.module').then(m=>m.HomeModule)},
  {path:'cart', loadChildren: () => import('./modules/nav/pages/cart/cart.module').then(m=>m.CartModule)},
  {path:'credit', loadChildren: () => import('./modules/nav/pages/credit/credit.module').then(m=>m.CreditModule)},
  {path:'dimension', loadChildren: () => import('./modules/nav/pages/dimension/dimension.module').then(m=>m.DimensionModule)},
  {path:'egress', loadChildren: () => import('./modules/nav/pages/egress/egress.module').then(m=>m.EgressModule)},
  {path:'expense', loadChildren: () => import('./modules/nav/pages/expense/expense.module').then(m=>m.ExpenseModule)},
  {path:'history', loadChildren: () => import('./modules/nav/pages/history/history.module').then(m=>m.HistoryModule)},
  {path:'income', loadChildren: () => import('./modules/nav/pages/income/income.module').then(m=>m.IncomeModule)},
  {path:'lot', loadChildren: () => import('./modules/nav/pages/lot/lot.module').then(m=>m.LotModule)},
  {path:'payment', loadChildren: () => import('./modules/nav/pages/payment/payment.module').then(m=>m.PaymentModule)},
  {path:'payment-method', loadChildren: () => import('./modules/nav/pages/payment-method/payment-method.module').then(m=>m.PaymentMethodModule)},
  {path:'premise', loadChildren: () => import('./modules/nav/pages/premise/premise.module').then(m=>m.PremiseModule)},
  {path:'product', loadChildren: () => import('./modules/nav/pages/product/product.module').then(m=>m.ProductModule)},
  {path:'promotion', loadChildren: () => import('./modules/nav/pages/promotion/promotion.module').then(m=>m.PromotionModule)},
  {path:'provider', loadChildren: () => import('./modules/nav/pages/provider/provider.module').then(m=>m.ProviderModule)},
  {path:'purchase', loadChildren: () => import('./modules/nav/pages/purchase/purchase.module').then(m=>m.PurchaseModule)},
  {path:'role', loadChildren: () => import('./modules/nav/pages/role/role.module').then(m=>m.RoleModule)},
  {path:'route', loadChildren: () => import('./modules/nav/pages/route/route.module').then(m=>m.RouteModule)},
  {path:'sale', loadChildren: () => import('./modules/nav/pages/sale/sale.module').then(m=>m.SaleModule)},
  {path:'seller', loadChildren: () => import('./modules/nav/pages/seller/seller.module').then(m=>m.SellerModule)},
  {path:'truck', loadChildren: () => import('./modules/nav/pages/truck/truck.module').then(m=>m.TruckModule)},
  {path:'user', loadChildren: () => import('./modules/nav/pages/user/user.module').then(m=>m.UserModule)},
  {path:'**',redirectTo:'auth'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
