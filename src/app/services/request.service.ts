import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { message } from '../utilities/functions/message';
import { Router } from '@angular/router';
import { queryRelation } from '../utilities/variables/relations';
// import { query } from '../utilities/variables/filter';
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
  charge = signal(false);
  pagination$!:Observable<any>;
  totalCount = signal(false);
  NextPage = signal(false);
  constructor(){
    this.pagination$ = new Observable();
  }
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
  private error(error: HttpErrorResponse): Observable<string> {
    let message = error.message
    if (error.error instanceof ErrorEvent) {
      console.error('Error del lado del cliente:', error.error.message);
    } else {
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
  Pagination(query:any,paginationData:string,start:number,limit:number,filters:any){
    return this.client.watchQuery({
      query,
      variables:{
        start,
        limit,
        filters
      },
      context:{
        headers:this.GraphqlHeaders(),
      }
    })
    .valueChanges.pipe(
      map((result:any) => result.data[paginationData]),
      catchError((error:any) => {
        message(error);
        return throwError(error);
      })
    )
  }
  GetData(query:any ){
    return this.client.watchQuery<any>({
      query:query,
    }).valueChanges.pipe(
      map((result:any) => result.data),
      catchError((error:any) => {
        message(error);
        return throwError(error);
      })
    );
  }
}
