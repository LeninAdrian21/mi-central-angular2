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
  title:string = 'Route'
  columns: string[] = table.route.columns;
  fields: Fields = table.route.fields;
  listName: string = 'route';
  paginationData:string = 'paginationDataRoute';
  getData:string = 'routes';
  link:string = '/route/form';
}
