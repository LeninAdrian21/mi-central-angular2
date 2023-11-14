import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { data } from 'src/app/shared/routes/data';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

const routes:Routes = data(ListComponent,FormComponent)

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class IncomeRoutingModule { }
