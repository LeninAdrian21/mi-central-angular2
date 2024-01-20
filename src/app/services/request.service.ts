import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { catchError, map, throwError } from 'rxjs';
import { message } from '../utilities/functions/message';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private url = '/api';
  http = inject(HttpClient);
  client = inject(Apollo);
  addUpdate = signal(false);
  submit = signal(false);
  addField = signal(false);
  input = signal('');
  pagination = signal([]);
  totalCount = signal(false);
  NextPage = signal(false);
  private Headers():HttpHeaders{
    const token = localStorage.getItem('token');
    if(token){
      return new HttpHeaders({
        'Content-Type': 'application/json',
        'authenticated': `Bearer ${token}`
      });
    }
    return new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  private GraphqlHeaders():Headers{
    const token = localStorage.getItem('token');
    return new Headers({
      'Content-Type': 'application/json',
      'authenticated': `Bearer ${token}`,
    });
  }
  private error(error:HttpErrorResponse){
    let message = error.message;
    if(error.error instanceof ErrorEvent) {
      console.error('Error del lado del cliente:', error.error.message);
    }else{
      console.error('Error del servidor:', error.status, error.error);
      message = `${error.error.message}`;
    }
    message = message ? message : 'Algo salió mal; por favor, inténtalo de nuevo más tarde.';
    return throwError(message);
  }
  post(endpoint:string, body:any){
    return this.http.post(`${this.url}/${endpoint}`, body,{headers:this.Headers()})
    .pipe(catchError(this.error))
  }
  get(endpoint:string){
    return this.http.post(`${this.url}/${endpoint}`,{headers:this.Headers()})
    .pipe(catchError(this.error))
  }
  Pagination(query:any,paginationData:any, start:number = 0, limit:number = 20, filters?:any){
    return this.client.watchQuery({
      query,
      variables:{
        start,
        limit,
        filters,
      },
      context:{
        headers:this.GraphqlHeaders(),
      }
    })
    .valueChanges.pipe(
      map((result:any) => result.data[paginationData]),
      catchError((error:any) => {
        console.error('Ocurrio un error:', error.message);
        message(error);
        return throwError(error);
      })
    )
  }
  // GetData(query:any,dataQuery:any){
  //   this.client.watchQuery({
  //     query
  //   }).valueChanges.pipe(
  //     map((result:any) => result.data[dataQuery]),
  //     catchError((error:any) => {
  //       console.error('Ocurrió un error:', error);
  //       message(error);
  //       return throwError(error);
  //     })
  //   )
  // }
}
