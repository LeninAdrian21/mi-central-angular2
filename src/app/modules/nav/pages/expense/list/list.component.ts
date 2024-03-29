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
  title:string = 'Expense';
  columns: string[] = table.expense.columns;
  fields: Fields = table.expense.fields;
  listName: string = 'expense';
  paginationData:string = 'paginationDataExpense';
  getData:string = 'expenses';
  link:string = '/expense/form'
}
