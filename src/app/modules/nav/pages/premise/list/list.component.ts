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
  title:string = 'Premise'
  columns: string[] = table.premise.columns;
  fields: Fields = table.premise.fields;
  listName: string = 'premise';
  paginationData:string = 'paginationDataPremise';
  getData:string = 'premises';
  link:string = '/premise/form';
}
