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
  title:string = 'User';
  columns: string[] = table.user.columns;
  fields: Fields = table.user.fields;
  listName: string = 'user';
  paginationData:string = 'paginationDataUser';
  link:string = '/user/form';
}
