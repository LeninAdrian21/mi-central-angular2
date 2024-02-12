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
  title:string = 'Provider'
  columns: string[] = table.provider.columns;
  fields: Fields = table.provider.fields;
  listName: string = 'provider';
  paginationData: string = 'paginationDataProvider';
  getData: string = 'providers';
  link: string = '/provider/form';
}
