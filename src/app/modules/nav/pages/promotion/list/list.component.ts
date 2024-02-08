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
  title:string = 'Promotion';
  columns: string[] = table.promotion.columns;
  fields: Fields = table.promotion.fields;
  listName: string = 'promotion';
  paginationData: string = 'paginationDataPromotion';
  link: string = '/promotion/form';
}
