import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, effect, inject, signal } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RequestService } from 'src/app/services/request.service';
import { deleteInput } from 'src/app/utilities/functions/table';
import { Fields } from 'src/app/utilities/interface/list';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{

  @Input({required: true}) columns!:string[];
  @Input({required: true}) fields!:Fields;
  @Input({required: true}) listName!:string;
  @Input()link:string = "";
  @Input()select!:boolean;
  @Input()relation!:boolean;
  @Input()tableSelectedData:any = [];
  @Output()scrolled:EventEmitter<Event> = new EventEmitter<Event>();
  @Output()selectedData = new EventEmitter<any[]>();
  service = inject(RequestService);
  displayedColumns:string[] = [];
  dataSource = new MatTableDataSource();
  selection:any;
  items:any[]  = [];
  roleEdit: string[] = ['Administrator']
  roleDelete: string[] = ['Administrator']
  roleActions: string[] = ['Administrator']
  role!:string;
  constructor(){
    effect(() => {
      const data = this.service.pagination();
      this.dataSource.data = data;
      this.selection = new SelectionModel<any>(this.select);
      if(this.tableSelectedData.length > 0) {
        this.dataSource.data.forEach((data:any) => {
          if (this.tableSelectedData.some((selectedItem: { _id: any; }) => selectedItem._id === data.id)) {
            this.selection.select(data);
          }
        });
      }
    })
  }
  ngOnInit(): void {
    this.service.getRole().subscribe(role => {
      this.role = role;
      if(this.roleActions.includes(role)){
        this.columns = [...this.columns,'actions'];
        this.displayedColumns = this.columns;
      }else{
        this.displayedColumns = this.columns;
      }
    });
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
  checkboxLabel(row?:any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    this.selectedData.emit(this.selection.selected);
    // this.service.selections.set(this.selection.selected);
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
  Delete(id: string) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteInput[this.listName](id,this.service,)
      }
    });
  }
}
