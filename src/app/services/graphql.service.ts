import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, catchError, throwError } from 'rxjs';
import { Message } from '../shared/functions/form/form';
import { getData } from '../shared/graphql/getData';
import { Pagination } from '../shared/graphql/pagination';
import { getRelations } from '../shared/graphql/getRelations';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {
  headers = new HttpHeaders().set('authenticated',`Bearer ${localStorage.getItem('token')}`);
  constructor(private apollo:Apollo) { }
  GetPaginator(
    pagination:any,
    start:number,
    limit:number,
    filters: any,
  ){
    return this.apollo.watchQuery({
      query: Pagination[pagination],
      variables:{
        start,
        limit,
        filters
      },
      context:{
        headers:this.headers
      }
    })
    .valueChanges.pipe(
      map((result:any)=> result.data[pagination]),
      catchError((error:any)=>{
        console.log(error.message);
        Message(error);
        return throwError(error);
      })
    )
  }
  GetData(data:any){
    return this.apollo.watchQuery<any>({
      query:getData[data],
    }).valueChanges.pipe(
      map((result:any) => result.data[data]),
      catchError((error:any) => {
        console.error('Ocurrió un error:', error.message);
        Message('Error al carga la información');
        return throwError(error);
      })
    );
  }
  GetRelations(data:any){
    return this.apollo.watchQuery<any>({
      query:getRelations[data],
    }).valueChanges.pipe(
      map((result:any) => result.data[data]),
      catchError((error:any) => {
        console.error('Ocurrió un error:', error.message);
        Message('Error al carga la información');
        return throwError(error);
      })
    );
  }
}
