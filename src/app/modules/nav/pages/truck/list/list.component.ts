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
  title:string = 'Truck'
  columns: string[] = table.truck.columns;
  fields: Fields = table.truck.fields;
  listName: string = 'truck';
  paginationData:string = 'paginationDataTruck';
  getData:string = 'trucks';
  link:string = '/truck/form';
}
