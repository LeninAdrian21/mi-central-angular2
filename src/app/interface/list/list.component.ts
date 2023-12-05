import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { GraphqlService } from 'src/app/services/graphql.service';
import { HttpClientService } from 'src/app/services/http-client.service';
import { ListarData } from 'src/app/shared/functions/list/LisarData';
import { map } from 'rxjs';

@Component({
  selector: 'app-interface-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  @Input() title:string = '';
  @Input() pagination:string = '';
  @Input() link = '';
  @Input() fields:any;
  @Input() columns:any;
  @Input() role:any;
  @Input() rolAccions:any;
  @Input() rolEdit:any;
  @Input() rolDelete:any;
  @Input() data:any;
  start = 0;
  limit = 10;
  event:any;
  filters:any[] = [];
  dataSource = new MatTableDataSource();
  groupedData:any = {};
  totalCount: any;
  NextPage: any;
  items: any[] = [];
  dataTable: any;
  charge = false;
  reload: boolean = false;
  constructor(private service:HttpClientService, private graphql:GraphqlService){}
  ngOnInit(){
    // this.ListarData();
    this.service.addFieldTable$.subscribe(data =>{
      this.reload = data;
    });
    if(this.reload){
      return location.reload();
    }
    this.GetPaginator();
  }
  OnScroll(event: Event) {
    const miDiv:any = event.target;
    const pixelsDesplazados = miDiv.scrollTop;
    const pixelsScrollTotal = miDiv.scrollHeight - miDiv.clientHeight;
    if (pixelsDesplazados == pixelsScrollTotal && this.NextPage) {
      this.charge = true;
      setTimeout(() => {
        this.start = this.start + this.limit;
        this.GetPaginator();
        this.charge = false;
      }, 2000);
    }
  }
  // ListarData(){
  //   ListarData.call(this,this.graphql,this.data,this.groupedData);
  // }
  GetPaginator(){
    this.dataTable = this.graphql.GetPaginator(this.pagination,this.start,this.limit,this.filters)
      .pipe(
        map((data: any) => {
          const { edges, totalCount, pageInfo } = data;
          this.totalCount = totalCount;
          this.NextPage = pageInfo?.hasNextPage;
          return edges?.map((item: any) => item.node) || [];
        })
      );
  }
  Clear() {
    this.start = 0;
    this.items = [];
    this.filters = [];
    this.GetPaginator();
  }
  Filter(){}
  Import(){}
  Export(){}
}
