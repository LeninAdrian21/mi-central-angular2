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
  title:string = 'Credit';
  columns: string[] = table.credit.columns;
  fields: Fields = table.credit.fields;
  listName: string = 'credit';
  pagiationData:string = 'paginationDataCredit';
  link: string = '/credit/form';
}
