import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from '../../nav.component';
import { SharedModule } from "../../../../shared/shared.module";
import { ImportComponent } from './import/import.component';
import { ExportComponent } from './export/export.component';
const routes: Routes = [
  {
    path:'',
    component: NavComponent,
    children:[
      {path:'list',
      // canActivate:[hasRoleGuard],
      data:{allowedRoles:['Administrator','Client','Delivery man','Inventorist','Manager','Sales','Secretary','User']},
      component:ListComponent},
      {path:'form',
      // canActivate:[hasRoleGuard],
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
        ImportComponent,
        ExportComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class RouteModule { }
