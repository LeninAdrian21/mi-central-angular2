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
  title:string = 'Sale';
  columns: string[] = table.sale.columns;
  fields: Fields = table.sale.fields;
  listName: string = 'sale';
  paginationData:string = 'paginationDataSale';
  link:string = '/sale/form';
}
