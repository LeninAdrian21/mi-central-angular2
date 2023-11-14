import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { InputComponent } from './input/input.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    FormComponent,
    InputComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    FormComponent,
    InputComponent,
    TableComponent,
  ]
})
export class FeaturesModule { }
