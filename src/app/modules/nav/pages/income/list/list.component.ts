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
  title:string = 'Income'
  columns: string[] = table.income.columns;
  fields: Fields = table.income.fields;
  listName: string = 'income';
  paginationData: string = 'paginationDataIncome';
  getData: string = 'incomes';
  link:string = '/income/form';
}
