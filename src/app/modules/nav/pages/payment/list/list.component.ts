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
  title:string = 'Payment'
  columns: string[] = table.payment.columns;
  fields: Fields = table.payment.fields;
  listName: string = 'payment';
  paginationData:string = 'paginationDataPayment';
  link:string = '/payment/form'
}
