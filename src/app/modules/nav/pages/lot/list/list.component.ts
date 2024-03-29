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
  title: string = 'Lot'
  columns: string[] = table.lot.columns;
  fields: Fields = table.lot.fields;
  listName: string = 'lot';
  paginationData: string = 'paginationDataLot';
  getData: string = 'lots';
  link: string = '/lot/form';
}
