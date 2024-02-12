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
  title:string = 'Purchases';
  columns: string[] = table.purchase.columns;
  fields: Fields = table.purchase.fields;
  listName: string = 'purchase';
  paginationData: string = 'paginationDataProvider';
  getData: string = 'paginationDataProvider';
  link: string = '/purchase/form';
}
