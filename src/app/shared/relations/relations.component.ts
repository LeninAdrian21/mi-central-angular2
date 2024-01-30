import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { table } from 'src/app/utilities/variables/relations';


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
  btn:string = table[this.data.field].btn;
  constructor(@Inject(DIALOG_DATA) public data:any ){}
  ngOnInit(): void {

  }
  toggleForm() {
    this.showForm = !this.showForm;
  }
  List() {
  // throw new Error('Method not implemented.');
  }
}
