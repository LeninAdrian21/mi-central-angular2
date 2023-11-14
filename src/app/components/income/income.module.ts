import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { IncomeRoutingModule } from './income-routing.module';
import { InterfaceModule } from 'src/app/interface/interface.module';



@NgModule({
  declarations: [
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    IncomeRoutingModule,
    InterfaceModule
  ]
})
export class IncomeModule { }
