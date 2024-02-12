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
  title:string = 'Payment Method'
  columns: string[] = table.payment_method.columns;
  fields: Fields = table.payment_method.fields;
  listName: string = 'payment_method';
  paginationData:string = 'paginationDataPaymentMethod';
  getData:string = 'paymentMethods';
  link:string = '/payment_method/form';
}
