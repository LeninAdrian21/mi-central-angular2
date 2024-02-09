import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RequestService } from 'src/app/services/request.service';
import { Fields } from 'src/app/utilities/interface/list';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
Delete(arg0: any) {
throw new Error('Method not implemented.');
}

  @Input({required: true}) columns!:string[];
  @Input({required: true}) fields!:Fields;
  @Input({required: true}) listName!:string;
  @Input()select:boolean = false;
  @Input()relation:boolean = false;
  @Input()link:string = "";
  @Output()scrolled:EventEmitter<Event> = new EventEmitter<Event>();
  service = inject(RequestService);
  displayedColumns:string[] = [];
  dataSource = new MatTableDataSource();
  selection:any;
  items:any[]  = [];
  ngOnInit(): void {
    console.log(this.listName);
    // this.dataSource.data.forEach( data => {
    //   if(data.name.includes('Neon')){
    //     this.selection.select(data)
    //   }
    // })
    this.displayedColumns = this.columns;
    this.selection = new SelectionModel<any>();
    this.service.pagination$.subscribe(data => {
      this.items.push(...data);
      this.dataSource.data = this.items;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  OnScroll(event: Event) {
    this.scrolled.emit(event);
  }
  extraerFechaDesdeTexto(texto:any) {
    // console.log(texto);
    const regex = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;
    if (regex.test(texto)) {
      const fecha = new Date(texto);
      const dia = fecha.getDate();
      const mes = fecha.getMonth() + 1;
      const año = fecha.getFullYear();
      return `${dia}/${mes}/${año}`;
    }
    return texto;
  }
  Buy(id:string){

  }
  Sell(id:string){}
}
