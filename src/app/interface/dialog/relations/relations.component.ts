import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs';
import { SearchService } from 'src/app/features/input/servces/search.service';
import { FormDataItem } from 'src/app/interfaces/formData';
import { ComponentsService } from 'src/app/services/components.service';
import { GraphqlService } from 'src/app/services/graphql.service';
@Component({
  selector: 'app-relations',
  templateUrl: './relations.component.html',
  styleUrls: ['./relations.component.scss']
})
export class RelationsComponent implements OnInit {
  fields: any = this.data.tableRelations.fields;
  columns: any = this.data.tableRelations.columns;
  title: string = this.data.tableRelations.title;
  select:boolean = this.data.tableRelations.select;
  formInfo:FormDataItem[] = this.data.tableRelations.formInfo;
  nameTable:string = this.data.tableRelations.nameTable;
  items: any[] = [];
  dataTable: any;
  dataSource = new MatTableDataSource();
  displayedColumns:string[] = [];
  selection:any;
  hidePassword: boolean = false;
  filter:any;
  dataSelect:any;
  constructor(
    private dialogRef:MatDialogRef<RelationsComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data:{
      field:string,
      tableRelations:{
        fields: {
          position: string;
          [otherField: string]: string;
        };
        columns: string[];
        nameTable: string;
        search: string;
        title: string;
        select:boolean;
        formInfo:FormDataItem[];
      }
    },
    private graphql:GraphqlService,
    private search:SearchService,
    private service:ComponentsService,
  ){}
  ngOnInit(): void {
    this.GetRelation();
  }
  GetRelation(){
    this.dataTable = this.graphql.GetRelations(this.data.tableRelations.nameTable).pipe(map((relations : any) =>relations));
    this.dataTable.subscribe((data : any) =>{
      this.service.updateNewData(data);
    })
  }
  List() {
    this.service.datoSeleccionado$.subscribe((data : any) => {
      this.dataSelect=data;
    });
    if(this.dataSelect) {
      this.dialogRef.close({data:this.dataSelect,field:this.data.field});
    }else{
      this.dialogRef.close();
    }
  }
}
