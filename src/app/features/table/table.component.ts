import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { SearchService } from '../input/servces/search.service';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClientService } from 'src/app/services/http-client.service';
import { GraphqlService } from '../../services/graphql.service';
import { filter, map } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { ComponentsService } from 'src/app/services/components.service';
import { devDebug } from '@apollo/client/invariantErrorCodes';

@Component({
  selector: 'app-features-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit,OnChanges {
// List() {
//   const info = this.selection.selected.reduce((obj:any,item:any) => {
//         obj.push({['id']:item.id})
//         return obj
//       },[]);
//       console.log(info);
// }
  @Input() filters:any[] = [];
  @Input() event:any;
  @Input() fields:any;
  @Input() columns:any =['column','name'];
  @Input() rolAccions:any;
  @Input() rolEdit:any;
  @Input() rolDelete:any;
  @Input() link:any;
  @Input() dataTable:any;
  @Input() charge:boolean = false;
  @Input() items: any[] = [];
  @Input() select:boolean = false;
  @Input() newData:any;
  filter:any;
  roleEdit:any;
  roleDelete:any;
  NextPage:any;
  selection:any;
  displayedColumns:string[] = [];
  dataSource = new MatTableDataSource();
  totalCount: any;
  dataSelect:any=[];
  constructor(private search:SearchService,private graphql:GraphqlService, private data:ComponentsService,private component:ComponentsService){
  }
  ngOnInit(){
    this.component.newData$.subscribe((item: any[]) =>{
      if (item !== null) {
        this.items = [];
        this.items.push(...item);
        this.dataSource.data = this.items;
      }
    });
    if(this.rolEdit && this.rolDelete && this.rolAccions){
      this.rolEdit.subscribe((rol: string) => {
        this.roleEdit = rol;
      });
      this.rolDelete.subscribe((rol: string) => {
        this.roleDelete = rol;
      });
      this.rolAccions.subscribe((item: any) => {
        if (item) {
          this.columns = [...this.columns, 'actions'];
        }
        this.displayedColumns = this.columns;
      });
    }else{
      this.displayedColumns = this.columns;
      this.selection = new SelectionModel<any>(this.select,[]);
    }
    this.search.filtroActual.subscribe((filter:any) =>{
      this.filter = filter;
      this.dataSource.filter = filter.trim().toLowerCase();
      // console.log(this.dataSource.filter);
    });
  }
  ngOnChanges(changes: SimpleChanges){
    this.dataSelect = [];
    if(changes['dataTable']){
      this.dataTable.subscribe((item: any[]) => {
        this.items.push(...item);
        this.dataSource.data = this.items;
        // console.log(this.dataSource.data);
      })
    }
  }

  Buy(id:string){}
  Sell(id:string){}
  Delete(id:string){}
  extraerFechaDesdeTexto(texto:any) {
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
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    console.log(numSelected)
    return numSelected === numRows;
  }
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  toggle(row: any,$event:any) {
    // console.log($event)
    // console.log(row)
    this.selection.toggle(row);
    const info = this.selection.selected.reduce((obj:any,item:any) => {
        return item.id
      },{});
    this.dataSelect.push(info);
    if(this.select){
      this.data.datoSeleccionado$.subscribe((data) => {
        this.dataSelect.push(data);
      });
      this.dataSelect = this.dataSelect.filter((objeto: { id: any; }, index: any, self: any[]) => {
        return index === self.findIndex(obj => obj.id === objeto.id);
      });
      this.data.actualizarDatoSeleccionado(this.dataSelect);
    }else{
      this.data.actualizarDatoSeleccionado(info);
    }
    // console.log(info)
  }

}
