import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { data } from 'src/app/shared/routes/data';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { Router, RouterModule, Routes } from '@angular/router';

const router:Routes = data(ListComponent,FormComponent);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ],
  exports:[
    RouterModule
  ]
})
export class EgressRoutingModule { }
