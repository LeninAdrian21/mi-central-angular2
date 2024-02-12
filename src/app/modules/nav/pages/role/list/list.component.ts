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
  title:string = 'Role';
  columns: string[] = table.role.columns;
  fields: Fields = table.role.fields;
  listName: string = 'role';
  paginationData:string = 'paginationDataRoleType';
  getData:string = 'roleTypes';
  link:string = '/role/form';
}
