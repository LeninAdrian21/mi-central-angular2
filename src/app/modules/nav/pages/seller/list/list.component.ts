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
  title:string = 'Seller';
  columns: string[] = table.seller.columns;
  fields: Fields = table.seller.fields;
  listName: string = 'seller';
  paginationData:string = 'paginationDataSeller';
  getData:string = 'sellers';
  link:string = '/seller/form';
}
