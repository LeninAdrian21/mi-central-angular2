import { Component, Input, OnInit, effect, inject } from '@angular/core';
import { Fields } from 'src/app/utilities/interface/list';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { FilterComponent } from '../filter/filter.component';
import { ExportComponent } from '../export/export.component';
import { ImportComponent } from '../import/import.component';
import { RequestService } from 'src/app/services/request.service';
import { query } from 'src/app/utilities/variables/list';
import { filter, map, toArray } from 'rxjs';
import { queryFilter } from 'src/app/utilities/variables/filter';
import { MatDialog } from '@angular/material/dialog';
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
  @Input({required:true}) getData!:string;
  @Input({required:true}) link!:string;
  service = inject(RequestService);
  start:number = 0;
  limit:number = 20;
  NextPage: boolean = false;
  filters:any;
  groupedData:any = {};
  constructor(
    public dialog:MatDialog
  ){
  }
  ngOnInit(): void {
    if(this.service.entryCreated()){
      this.service.entryCreated.set(false);
      return location.reload();
    }
    this.GetPaginator(false);
    this.GetDataFilter();
  }

  onTableScroll(event: Event): void {
    const miDiv:any = event.target;
    const pixelsDesplazados = miDiv.scrollTop;
    const pixelsScrollTotal = miDiv.scrollHeight - miDiv.clientHeight;
    // && this.NextPage
    if (pixelsDesplazados == pixelsScrollTotal && this.NextPage) {
      this.service.charge.set(true);
      setTimeout(() => {
        this.start = this.start + this.limit;
        this.GetPaginator(true);
        this.service.charge.set(false);
      }, 2000);
    }
  }
  GetPaginator(update:boolean){
    console.log(this.listName);
    this.service.Pagination(query[this.listName], this.paginationData,this.start,this.limit,this.filters).pipe(
      map((data:any) => {
        const { edges, totalCount, pageInfo } = data;
        // this.totalCount = totalCount;
        this.NextPage = pageInfo?.hasNextPage;
        return edges?.map((item: any) => item.node) || [];
      })
    ).subscribe(
      (data:any) => {
        if(update){
          this.service.pagination.set([...this.service.pagination(),...data]);
        }else{
          this.service.pagination.set(data);
        }
      }
    );
  }
  GetDataFilter(){
    this.service.GetData(queryFilter[this.listName],this.getData)
    .pipe(
      filter((data: any) => data && Array.isArray(data)),
      map((data: any[]) => {
        return data.map(item => {
          if (item && typeof item === 'object' && '__typename' in item) {
            const { __typename, ...rest } = item;
            return rest;
          }
          return item;
        });
      }),
      map((filteredData: any[]) => {
        // Filtra las claves que no tengan valores null o undefined
        return filteredData.map(item => {
          return Object.keys(item).reduce((acc:any, key:any) => {
            if (item[key] !== null && item[key] !== undefined) {
              if (Array.isArray(item[key])) {
                acc[key] = item[key].map((value: any) => {
                  if (value && typeof value === 'object' && '__typename' in value) {
                    const { __typename, ...rest } = value;
                    return rest;
                  }
                  return value;
                });
              }  else if (typeof item[key] === 'object') {
                const { __typename, ...rest } = item[key];
                acc[key] = rest;
              } else {
                acc[key] = item[key];
              }
            }
            return acc;
          }, {});
        });
      }),
      map((filteredAndCleanedData: any[]) => {
        const groupedData: { [key: string]: any[] } = {};
        filteredAndCleanedData.forEach((item) => {
          Object.keys(item).forEach((key) => {
            const value = item[key];
            if (value !== null && value !== undefined) {
              if (!groupedData[key]) {
                groupedData[key] = [];
              }
              if (Array.isArray(value)) {
                value.forEach((element: any) => {
                  if (element !== null && element !== undefined && key !== 'plate_details') {
                    Object.values(element).forEach((val) => {
                      if (val !== null && val !== undefined && !groupedData[key].includes(val)) {
                        groupedData[key].push(val);
                      }
                    });
                  }else{
                    groupedData[key].push(element);
                  }
                });
              } else {
                if (!groupedData[key].includes(value)) {
                  groupedData[key].push(value);
                }
              }
            }
          });
        });
        return groupedData;
      }),
      map((data:any) => {
        Object.keys(data).forEach((key:any) => {
          if(key == 'plate_details'){
            data['plate_details.plate'] = [];
            data['plate_details.state'] = [];
            data['plate_details.active'] = [];
            console.log(data[key]);
            data[key].forEach((element:any) => {
              data['plate_details.plate'].push(element.plate);
              data['plate_details.state'].push(element.state);
              data['plate_details.active'].push(element.active);
            });
            delete data[key];
          }
        });
        return data;
      })
    )
    .subscribe((data: any) => {
      Object.assign(this.groupedData, data)
    });
  }
  Clear() {
    this.filters = [];
    this.start = 0;
    this.limit = 20;
    this.NextPage = false;
    this.GetPaginator(false);
  }
  Filter():void {
    console.log(this.groupedData);
    const data:any ={
      listName:this.listName,
      dataFilter:this.groupedData
    }
    const dialogRef:any = this.dialog.open(FilterComponent,{width:'1250px',data});
    dialogRef.afterClosed().subscribe((result: any) => {
      this.filters = result;
      // console.log(this.filters);
      this.service.Pagination(query[this.listName], this.paginationData,this.start,this.limit,this.filters).pipe(
        map((data:any) => {
          const { edges, totalCount, pageInfo } = data;
          // this.totalCount = totalCount;
          this.NextPage = pageInfo?.hasNextPage;
          return edges?.map((item: any) => item.node) || [];
        })
      ).subscribe(
        (data:any) => {
          this.service.pagination.set(data);
          console.log(data);
          // this.totalCount = totalCount;
          // this.NextPage = pageInfo?.hasNextPage;
        }
      )
    });
    // this.service.pagination$ = this.service.Pagination(query[this.listName], this.paginationData,this.start,this.limit,this.filters).pipe(
    //   map((data:any) => {
    //     const { edges, totalCount, pageInfo } = data;
    //     // this.totalCount = totalCount;
    //     this.NextPage = pageInfo?.hasNextPage;
    //     return edges?.map((item: any) => item.node) || [];
    //   })
    // );
  }
  Export() {
    const dialogRef = this.dialog.open(ExportComponent,{width:'1275px'});
  }
  Import() {
    const dialog = this.dialog.open(ImportComponent,{width:'420px'});
  }
}

