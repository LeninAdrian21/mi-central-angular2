import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { InterfaceModule } from 'src/app/interface/interface.module';



@NgModule({
  declarations: [
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule,
    InterfaceModule,
  ]
})
export class ProductModule { }
