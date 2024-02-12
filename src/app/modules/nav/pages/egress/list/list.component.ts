import { Component } from '@angular/core';
import { Fields } from 'src/app/utilities/interface/list';
import { table } from 'src/app/utilities/variables/list';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent {
  title:string = 'Egress';
  columns: string[] = table.egress.columns;
  fields: Fields = table.egress.fields;
  listName: string = 'egress';
  paginationData:string = 'paginationDataEgress';
  getData:string = 'egresses';
  link:string = '/egress/form'
}
