import { Component, Input, inject } from '@angular/core';
import { Fields } from 'src/app/utilities/interface/list';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { FilterComponent } from '../filter/filter.component';
import { ExportComponent } from '../export/export.component';
import { ImportComponent } from '../import/import.component';
@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent {
  @Input({required:true}) title!:string;
  @Input({required:true}) columns!:string[];
  @Input({required:true}) fields!:Fields;
  @Input({required:true}) listName: any ='product';
  @Input({required:true}) link!:string;
  constructor(
    private dialog:Dialog
  ){}
  Clear() {

  }
  Filter() {
    const data:any ={
      listName:this.listName
    }
    const dialogRef = this.dialog.open(FilterComponent,{width:'1250px',data})
  }
  Export() {
    const dialogRef = this.dialog.open(ExportComponent,{width:'1275px'});
  }
  Import() {
    const dialog = this.dialog.open(ImportComponent,{width:'420px'});
  }
}

