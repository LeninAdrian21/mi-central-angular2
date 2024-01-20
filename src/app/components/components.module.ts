import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
// import { InputComponent } from './input/input.component';
import { TableComponent } from './table/table.component';
import { MaterialModule } from '../material/material.module';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
    InputComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[
    FormComponent,
    InputComponent,
    TableComponent,
  ]
})
export class ComponentsModule { }
