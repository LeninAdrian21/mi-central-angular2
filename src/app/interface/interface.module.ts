import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FeaturesModule } from '../features/features.module';
import { RelationsComponent } from './dialog/relations/relations.component';



@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    RelationsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    FeaturesModule
  ],
  exports:[
    ListComponent,
    FormComponent
  ]
})
export class InterfaceModule { }
