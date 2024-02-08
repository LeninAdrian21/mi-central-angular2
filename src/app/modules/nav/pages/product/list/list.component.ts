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
  title:string = 'Product';
  columns: string[] = table.product.columns;
  fields: Fields = table.product.fields;
  listName: string = 'product';
  paginationData:string = 'paginationDataProduct';
  link:string = '/product/form';
}
