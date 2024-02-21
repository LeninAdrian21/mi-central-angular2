import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { hasRoleGuard } from './guard/has-role.guard';

const routes: Routes = [
  {
    path:'auth', loadChildren: () => import('./modules/auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'home', loadChildren: () => import('./modules/nav/pages/home/home.module').then(m=>m.HomeModule),
    canActivate: [hasRoleGuard],
    data: {
      allowedRoles: ['Administrator', 'Client', 'Delivery man', 'Inventorist', 'Manager', 'Sales', 'Secretary', 'User']
    }
  },
  {
    path:'cart', loadChildren: () => import('./modules/nav/pages/cart/cart.module').then(m=>m.CartModule),
    canActivate: [hasRoleGuard],
    data: {
      allowedRoles: ['Administrator', 'Client', 'Delivery man', 'Inventorist', 'Manager', 'Sales', 'Secretary', 'User']
    }
  },
  {
    path:'credit', loadChildren: () => import('./modules/nav/pages/credit/credit.module').then(m=>m.CreditModule),
    canActivate: [hasRoleGuard],
    data: {
      allowedRoles: ['Administrator', 'Client', 'Delivery man', 'Inventorist', 'Manager', 'Sales', 'Secretary', 'User']
    }
  },
  {path:'dimension', loadChildren: () => import('./modules/nav/pages/dimension/dimension.module').then(m=>m.DimensionModule),
    canActivate: [hasRoleGuard],
    data: {
      allowedRoles: ['Administrator', 'Client', 'Delivery man', 'Inventorist', 'Manager', 'Sales', 'Secretary', 'User']
    }
  },
  {path:'egress', loadChildren: () => import('./modules/nav/pages/egress/egress.module').then(m=>m.EgressModule),
  canActivate: [hasRoleGuard],
    data: {
      allowedRoles: ['Administrator', 'Client', 'Delivery man', 'Inventorist', 'Manager', 'Sales', 'Secretary', 'User']
    }
},
  {path:'expense', loadChildren: () => import('./modules/nav/pages/expense/expense.module').then(m=>m.ExpenseModule),
  canActivate: [hasRoleGuard],
    data: {
      allowedRoles: ['Administrator', 'Client', 'Delivery man', 'Inventorist', 'Manager', 'Sales', 'Secretary', 'User']
    }
},
  {path:'history', loadChildren: () => import('./modules/nav/pages/history/history.module').then(m=>m.HistoryModule),
  canActivate: [hasRoleGuard],
    data: {
      allowedRoles: ['Administrator', 'Client', 'Delivery man', 'Inventorist', 'Manager', 'Sales', 'Secretary', 'User']
    }
},
  {path:'income', loadChildren: () => import('./modules/nav/pages/income/income.module').then(m=>m.IncomeModule),
  canActivate: [hasRoleGuard],
    data: {
      allowedRoles: ['Administrator', 'Client', 'Delivery man', 'Inventorist', 'Manager', 'Sales', 'Secretary', 'User']
    }
},
  {path:'lot', loadChildren: () => import('./modules/nav/pages/lot/lot.module').then(m=>m.LotModule),
  canActivate: [hasRoleGuard],
    data: {
      allowedRoles: ['Administrator', 'Client', 'Delivery man', 'Inventorist', 'Manager', 'Sales', 'Secretary', 'User']
    }
},
  {path:'payment', loadChildren: () => import('./modules/nav/pages/payment/payment.module').then(m=>m.PaymentModule),
  canActivate: [hasRoleGuard],
    data: {
      allowedRoles: ['Administrator', 'Client', 'Delivery man', 'Inventorist', 'Manager', 'Sales', 'Secretary', 'User']
    }
},
  {path:'payment-method', loadChildren: () => import('./modules/nav/pages/payment-method/payment-method.module').then(m=>m.PaymentMethodModule),
  canActivate: [hasRoleGuard],
    data: {
      allowedRoles: ['Administrator', 'Client', 'Delivery man', 'Inventorist', 'Manager', 'Sales', 'Secretary', 'User']
    }
},
  {path:'premise', loadChildren: () => import('./modules/nav/pages/premise/premise.module').then(m=>m.PremiseModule),
  canActivate: [hasRoleGuard],
    data: {
      allowedRoles: ['Administrator', 'Client', 'Delivery man', 'Inventorist', 'Manager', 'Sales', 'Secretary', 'User']
    }
},
  {path:'product', loadChildren: () => import('./modules/nav/pages/product/product.module').then(m=>m.ProductModule),
  canActivate: [hasRoleGuard],
    data: {
      allowedRoles: ['Administrator', 'Client', 'Delivery man', 'Inventorist', 'Manager', 'Sales', 'Secretary', 'User']
    }
},
  {path:'promotion', loadChildren: () => import('./modules/nav/pages/promotion/promotion.module').then(m=>m.PromotionModule),
  canActivate: [hasRoleGuard],
    data: {
      allowedRoles: ['Administrator', 'Client', 'Delivery man', 'Inventorist', 'Manager', 'Sales', 'Secretary', 'User']
    }
},
  {path:'provider', loadChildren: () => import('./modules/nav/pages/provider/provider.module').then(m=>m.ProviderModule),
  canActivate: [hasRoleGuard],
    data: {
      allowedRoles: ['Administrator', 'Client', 'Delivery man', 'Inventorist', 'Manager', 'Sales', 'Secretary', 'User']
    }
},
  {path:'purchase', loadChildren: () => import('./modules/nav/pages/purchase/purchase.module').then(m=>m.PurchaseModule),
  canActivate: [hasRoleGuard],
    data: {
      allowedRoles: ['Administrator', 'Client', 'Delivery man', 'Inventorist', 'Manager', 'Sales', 'Secretary', 'User']
    }
},
  {path:'role', loadChildren: () => import('./modules/nav/pages/role/role.module').then(m=>m.RoleModule),
  canActivate: [hasRoleGuard],
    data: {
      allowedRoles: ['Administrator', 'Client', 'Delivery man', 'Inventorist', 'Manager', 'Sales', 'Secretary', 'User']
    }
},
  {path:'route', loadChildren: () => import('./modules/nav/pages/route/route.module').then(m=>m.RouteModule),
  canActivate: [hasRoleGuard],
    data: {
      allowedRoles: ['Administrator', 'Client', 'Delivery man', 'Inventorist', 'Manager', 'Sales', 'Secretary', 'User']
    }
},
  {path:'sale', loadChildren: () => import('./modules/nav/pages/sale/sale.module').then(m=>m.SaleModule),
  canActivate: [hasRoleGuard],
    data: {
      allowedRoles: ['Administrator', 'Client', 'Delivery man', 'Inventorist', 'Manager', 'Sales', 'Secretary', 'User']
    }
},
  {path:'seller', loadChildren: () => import('./modules/nav/pages/seller/seller.module').then(m=>m.SellerModule),
  canActivate: [hasRoleGuard],
    data: {
      allowedRoles: ['Administrator', 'Client', 'Delivery man', 'Inventorist', 'Manager', 'Sales', 'Secretary', 'User']
    }
},
  {path:'truck', loadChildren: () => import('./modules/nav/pages/truck/truck.module').then(m=>m.TruckModule),
  canActivate: [hasRoleGuard],
    data: {
      allowedRoles: ['Administrator', 'Client', 'Delivery man', 'Inventorist', 'Manager', 'Sales', 'Secretary', 'User']
    }
},
  {path:'user', loadChildren: () => import('./modules/nav/pages/user/user.module').then(m=>m.UserModule),
  canActivate: [hasRoleGuard],
    data: {
      allowedRoles: ['Administrator', 'Client', 'Delivery man', 'Inventorist', 'Manager', 'Sales', 'Secretary', 'User']
    }
},
  {path:'**',redirectTo:'auth'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
