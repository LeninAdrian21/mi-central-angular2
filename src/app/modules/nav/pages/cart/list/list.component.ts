import { Component } from '@angular/core';
import { Fields } from 'src/app/utilities/interface/list';
import { table } from 'src/app/utilities/variables/list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent{
  title:string = 'Cart';
  columns: string[] = table.cart.columns;
  fields: Fields = table.cart.fields;
  listName: string = 'cart';
  paginationData: string = 'paginationDataCart';
  link: string = '/cart/form';
}
