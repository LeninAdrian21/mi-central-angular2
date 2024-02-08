import { Component, Input, OnInit, inject } from '@angular/core';
import { Fields } from 'src/app/utilities/interface/list';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { FilterComponent } from '../filter/filter.component';
import { ExportComponent } from '../export/export.component';
import { ImportComponent } from '../import/import.component';
import { RequestService } from 'src/app/services/request.service';
import { query } from 'src/app/utilities/variables/list';
import { map } from 'rxjs';
import { queryRelation } from 'src/app/utilities/variables/relations';
// import { query } from '../../utilities/variables/filter';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {
  @Input({required:true}) title!:string;
  @Input({required:true}) columns!:string[];
  @Input({required:true}) fields!:Fields;
  @Input({required:true}) listName: any ='product';
  @Input({required:true}) paginationData!:string;
  @Input({required:true}) link!:string;
  service = inject(RequestService);
  start:number = 0;
  limit:number = 20;
  NextPage: boolean = false;
  filters:any;
  constructor(
    private dialog:Dialog
  ){}
  ngOnInit(): void {
    this.GetPaginator();
  }

  onTableScroll(event: Event): void {
    const miDiv:any = event.target;
    const pixelsDesplazados = miDiv.scrollTop;
    const pixelsScrollTotal = miDiv.scrollHeight - miDiv.clientHeight;
    // && this.NextPage
    if (pixelsDesplazados == pixelsScrollTotal ) {
      this.service.charge.set(true);
      setTimeout(() => {
        this.start = this.start + this.limit;
        this.GetPaginator();
        this.service.charge.set(false);
      }, 2000);
    }
  }
  GetPaginator(){
    this.service.pagination$ = this.service.Pagination(query[this.listName], this.paginationData,this.start,this.limit,this.filters).pipe(
      map((data:any) => {
        const { edges, totalCount, pageInfo } = data;
        // this.totalCount = totalCount;
        this.NextPage = pageInfo?.hasNextPage;
        return edges?.map((item: any) => item.node) || [];
      })
    );
  }
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

