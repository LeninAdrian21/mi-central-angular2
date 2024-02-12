import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { BehaviorSubject, Observable, catchError, interval, map, of, startWith, switchMap, tap, throwError } from 'rxjs';
import { message } from '../utilities/functions/message';
import { Router } from '@angular/router';
import { queryRelation } from '../utilities/variables/relations';
import { nav } from '../utilities/variables/nav';
// import { query } from '../utilities/variables/filter';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private url = '/api';
  http = inject(HttpClient);
  client = inject(Apollo);
  router= inject(Router);
  addUpdate = signal(false);
  submit = signal<boolean>(false);
  entryCreated = signal(false)
  // addField = signal(false);
  charge = signal(false);
  pagination$!:Observable<any>;
  totalCount = signal(false);
  NextPage = signal(false);
  Token = signal('');
  pagination = signal<any[]>([]);
  token:string = localStorage.getItem('token') as string;
  selections = signal<any[]>([]);
  tableSelectedData = signal<any[]>([]);
  // refreshToken:string = localStorage.getItem('refresh_token') as string;
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
  private HeadersRefresh():HttpHeaders{
    const refresh = localStorage.getItem('refresh_token');
    if(refresh){
      return new HttpHeaders({
        'Content-Type': 'application/json',
        'refresh': `Bearer ${refresh}`
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
    return this.http.get(`${this.url}/${endpoint}`,{headers:this.Headers()})
    .pipe(catchError(this.error))
  }
  put(endpoint:string,body:any){
    return this.http.put(`${this.url}/${endpoint}`, body,{headers:this.Headers()})
    .pipe(catchError(this.error))
  }
  delete(endpoint:string){
    return this.http.delete(`${this.url}/${endpoint}`,{headers:this.Headers()})
    .pipe(catchError(this.error))
  }
  LogOut(endpoint:string){
    return this.http.get(`${this.url}/${endpoint}`,{headers:this.HeadersRefresh()})
    .pipe(catchError(this.error))
  }
  refreshToken(){
    return this.http.get(`${this.url}/custom-users/refresh/token`,{headers:this.HeadersRefresh()})
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
  GetData(query:any,field:string ){
    return this.client.watchQuery<any>({
      query:query,
    }).valueChanges.pipe(
      map((result:any) => result.data[field]),
      catchError((error:any) => {
        message(error);
        return throwError(error);
      })
    );
  }
  GetDataRelation(query:any,name:string,update:boolean){
    this.GetData(query,name).subscribe(
      (data) => {
        this.pagination.set(data);
      }
    )
  }

  getRole():Observable<string>{
    return this.get('custom-users/decrypt/role').pipe(map((response: any) => response.role));
  }
  getNav(): Observable<any> {
    return this.getRole().pipe(map((response: any) => {
      const navData:any = nav.filter((role:any) => role.roles.includes(response));
      return navData
    }));
  }
  isLoggenIn():Observable<boolean> {
    const token:string = localStorage.getItem('token') as string;
    // const refresh:string = localStorage.getItem('refresh_token') as string;
    if(!token){
      return of(false);
    }
    const tokenExp = this.getExpirations(token);
    if(tokenExp < Date.now()){
      return this.TokenRefresh().pipe(
        catchError(error => {
          localStorage.removeItem('token');
          localStorage.removeItem('refresh_token');
          return of(false);
        }),
        switchMap(() => {
          return of(true);
        })
      )
    }else{
      return of(true);
    }
  }
  getExpirations(token:string):number{
    const parts = token.split('.');
    const payload = JSON.parse(atob(parts[1]));
    console.log( new Date(payload.exp*1000));
    return payload.exp * 1000;
  }
  private TokenRefresh():Observable<any>{
   const refresh:string = localStorage.getItem('refresh_token') as string;
    if (!refresh) {
      // return throwError('No se encontró refreshToken');
      return of(false)
    }
    return this.refreshToken().pipe(
      switchMap((response: any) => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          return of(true);
        } else {
          console.log('Hubo error en esto nose porque', response);
          return of(false);
        }
      }),
      catchError(error => {
        localStorage.removeItem('token');
        localStorage.removeItem('refresh_token');
        console.error('Error al refrescar el token:', error);
        return of(false);
      })
    )
  }
  private handleError(error: any) {
    // Manejar errores de la solicitud HTTP
    console.error('Error al realizar la solicitud:', error);
    return throwError(error);
  }
  startCheckingAuthStatus(intervalTime: number = 300000 /* 5 minutos */): Observable<boolean> {
    return interval(intervalTime).pipe(
      startWith(0),
      switchMap(() => this.isLoggenIn())
    );
  }
}
