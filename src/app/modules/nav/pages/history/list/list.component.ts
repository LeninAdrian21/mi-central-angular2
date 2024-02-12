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
  title:string = 'History'
  columns: string[] = table.history.columns;
  fields: Fields = table.history.fields;
  listName: string = 'history';
  paginationData:string = 'paginationDataHistory';
  getData:string = 'histories';
  link:string = '/history/form';
}

