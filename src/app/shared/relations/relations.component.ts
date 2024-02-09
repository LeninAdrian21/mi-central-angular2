import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject, Input, OnInit, inject } from '@angular/core';
import { map } from 'rxjs';
import { RequestService } from 'src/app/services/request.service';
import { table,queryRelation } from 'src/app/utilities/variables/relations';


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
  service = inject(RequestService);
  constructor(@Inject(DIALOG_DATA) public data:any ){}
  ngOnInit(): void {
    this.service.pagination$ = this.service.GetData(queryRelation[this.data.field],this.data.field).pipe(
      map((data:any) => {
        return data;
      })
    )
    this.service.pagination$.subscribe((data:any) => {
      console.log(data);
    })
  }
  toggleForm() {
    this.showForm = !this.showForm;
  }
  List() {
  // throw new Error('Method not implemented.');
  }
}
