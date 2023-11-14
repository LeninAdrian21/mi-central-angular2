import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { EgressRoutingModule } from './egress-routing.module';
import { InterfaceModule } from 'src/app/interface/interface.module';
import { MaterialModule } from 'src/app/material/material.module';
import { FeaturesModule } from 'src/app/features/features.module';



@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
  ],
  imports: [
    EgressRoutingModule,
    CommonModule,
    MaterialModule,
    InterfaceModule,FeaturesModule
  ]
})
export class EgressModule { }
