import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { ImportComponent } from './import/import.component';
import { ExportComponent } from './export/export.component';
import { RelationsComponent } from './relations/relations.component';
import { ComponentsModule } from '../components/components.module';
import { FilterComponent } from './filter/filter.component';
@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    ImportComponent,
    ExportComponent,
    RelationsComponent,
    FilterComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
  ],
  exports:[
    ListComponent,
    FormComponent,
    ImportComponent,
    ExportComponent,
    RelationsComponent,
  ]
})
export class SharedModule { }
