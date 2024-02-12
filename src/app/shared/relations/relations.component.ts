import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject, Input, OnInit, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { map } from 'rxjs';
import { RequestService } from 'src/app/services/request.service';
import { DataRelation } from 'src/app/utilities/interface/relations';
import { data } from 'src/app/utilities/variables/export';
import { table,queryRelation } from 'src/app/utilities/variables/relations';
import { FormComponent } from '../form/form.component';


@Component({
  selector: 'app-relations',
  templateUrl: './relations.component.html',
  styleUrls: ['./relations.component.scss']
})
export class RelationsComponent implements OnInit{
  showForm: boolean = false;
  columns: any = table[this.data.field].columns;
  fields:any = table[this.data.field].fields;
  formInfo: any = table[this.data.field].formInfo;
  title:string = table[this.data.field].title;
  select:boolean = table[this.data.field].select;
  btn:string = table[this.data.field].btn;
  service = inject(RequestService);
  relation:boolean = true;
  selectData:any[] = [];
  tableSelectedData:any = [];
  constructor(public dialogRef: MatDialogRef<FormComponent>,@Inject(DIALOG_DATA) public data:DataRelation ){}
  ngOnInit(): void {
    console.log(this.data.form.value);
    console.log(this.data.form.value[this.data.field]);

    // this.tableSelectedData = this.data.form.get(this.data.field)?.value;
    this.tableSelectedData = this.data.form.value[this.data.field];
    console.log(this.tableSelectedData)
    this.GetData(false);
  }
  GetData(update:boolean){
    this.service.GetDataRelation(queryRelation[this.data.field].query,queryRelation[this.data.field].name,update)
    // this.service.GetData(queryRelation[this.data.field].query,queryRelation[this.data.field].name).subscribe(
    //   (data) => {
    //     if(update){
    //       this.service.pagiantion.set([...this.service.pagiantion(),...data]);
    //     }else{
    //       this.service.pagiantion.set(data);
    //     }
    //   }
    // )
  }
  handleSelectedData(selectedData: any[]) {
    this.selectData = selectedData;
    // // Maneja los datos seleccionados aquí
    // console.log('Datos seleccionados:', selectedData);
  }
  toggleForm() {
    // console.log(this.selectData);
    this.showForm = !this.showForm;
  }
  List() {
    let result;
    if (this.select) {
      result = this.selectData.map(field => ({ _id: field.id }));
    } else {
      result = { _id: this.selectData[0].id };
    }
    // this.form.get('product')?.setValue(data.name);
    this.data.form.get(this.data.field)?.setValue(result);
    this.dialogRef.close();
    // console.log(this.data.form.value);
  // throw new Error('Method not implemented.');
  }
}
