import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { NavComponent } from '../../nav.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from "../../../../shared/shared.module";
import { hasRoleGuard } from 'src/app/guard/has-role.guard';
const routes: Routes = [
  {
    path:'',
    component: NavComponent,
    canActivate: [hasRoleGuard],
    children:[
      {
        path:'list',
        data:{
          allowedRoles:['Administrator','Client','Delivery man','Inventorist','Manager','Sales','Secretary','User']
        },
        component:ListComponent,
      },
      {
        path:'form',
        data:{allowedRoles:['Administrator']
      },
      component:FormComponent},
      {path:'form/:id',
      // canActivate:[hasRoleGuard],
      data:{allowedRoles: ['Administrator']
      },
      component:FormComponent},
      {path:'**', redirectTo:'list'}
    ]
  }
]
@NgModule({
    declarations: [
        ListComponent,
        FormComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class CreditModule { }
