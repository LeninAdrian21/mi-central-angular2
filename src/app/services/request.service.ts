import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { message } from '../utilities/functions/message';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private baseUrl = '/api';
  addUpdate= signal(false);
  submit = signal(false);
  addCampo= signal(false);
  private readonly isLoggedIn = new BehaviorSubject<boolean>(false);
  private filterObservable = new BehaviorSubject<any>({filter:[]});
  constructor(private http: HttpClient, private router:Router) {}
  private getHeadersWithToken(): HttpHeaders {
    const token = localStorage.getItem('token');
    if (token) {
      return  new HttpHeaders({
        'Content-Type': 'application/json',
        'authenticated': 'Bearer ' + token
      });
    }
    return  new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }
  private getHeadersWithRefreshToken(): HttpHeaders {
    const refresh = localStorage.getItem('refresh_token');
    // console.log(refresh)
    if (refresh) {
      return  new HttpHeaders({
        'Content-Type': 'application/json',
        'refresh': 'Bearer ' + refresh
      });
    }
    return  new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }
  get(endpoint: string, withToken: boolean = true): Observable<any> {
    const headers = withToken ? this.getHeadersWithToken() : undefined;
    const options = { headers };
    return this.http.get<any>(`${this.baseUrl}/${endpoint}`, options)
      .pipe(
        catchError(this.handleError)
      );
  }
  getRefresh(endpoint: string, withToken: boolean = true): Observable<any> {
    const headers = withToken ? this.getHeadersWithRefreshToken() : undefined;
    const options = { headers };
    return this.http.get<any>(`${this.baseUrl}/${endpoint}`, options)
      .pipe(
        catchError(this.handleError)
      );
  }
  post(endpoint: string, body: any, withToken: boolean = true): Observable<any> {
    const headers = withToken ? this.getHeadersWithToken() : undefined;
    const options = { headers };
    return this.http.post<any>(`${this.baseUrl}/${endpoint}`, body, options)
      .pipe(
        catchError(this.handleError)
      );
  }
  subirArchivo(endpoint:string,archivo: File, withToken: boolean = true): Observable<any> {
    const headers = withToken ? this.getHeadersWithToken() : undefined;
    // const options = { headers };
    const formData = new FormData();
    formData.append('file', archivo);
    return this.http.post(`${this.baseUrl}/${endpoint}`, formData);
  }
  postFile(endpoint:string, body:string,withToken: boolean = true){
    const headers = withToken ? this.getHeadersWithRefreshToken() : undefined;
    return this.http.post(`${this.baseUrl}/${endpoint}`, body, { headers, responseType: 'blob' }).pipe(
      catchError((error) => {
        console.error('Error al descargar el archivo:', error);
        throw error;
      })
    );
  }
  put(endpoint: string, body: any, withToken: boolean = true): Observable<any> {
    const headers = withToken ? this.getHeadersWithToken() : undefined;
    const options = { headers };
    return this.http.put<any>(`${this.baseUrl}/${endpoint}`,body, options)
      .pipe(
        catchError(this.handleError)
      );
  }
  delete(endpoint: string, withToken: boolean = true): Observable<any> {
    const headers = withToken ? this.getHeadersWithToken() : undefined;
    const options = { headers };
    return this.http.delete(`${this.baseUrl}/${endpoint}`, options)
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(error: HttpErrorResponse): Observable<string> {
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
  // private url = '/api';
  // http = inject(HttpClient);
  // client = inject(Apollo);
  // addUpdate = signal(false);
  // submit = signal(false);
  // addField = signal(false);
  // pagination = signal([]);
  // totalCount = signal(false);
  // NextPage = signal(false);
  // private Headers():HttpHeaders{
  //   const token = localStorage.getItem('token');
  //   if(token){
  //     return new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'authenticated': `Bearer ${token}`
  //     });
  //   }
  //   return new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   })
  // }
  // private GraphqlHeaders():Headers{
  //   const token = localStorage.getItem('token');
  //   return new Headers({
  //     'Content-Type': 'application/json',
  //     'authenticated': `Bearer ${token}`,
  //   });
  // }
  // private error(error: HttpErrorResponse): Observable<string> {
  //   let message = error.message
  //   if (error.error instanceof ErrorEvent) {
  //     console.error('Error del lado del cliente:', error.error.message);
  //   } else {
  //     console.error('Error del servidor:', error.status, error.error);

  //     message = `${error.error.message}`;
  //   }
  //   message = message ? message : 'Algo salió mal; por favor, inténtalo de nuevo más tarde.';
  //   return throwError(message);
  // }
  // post(endpoint:string, body:any){
  //   return this.http.post(`${this.url}/${endpoint}`, body,{headers:this.Headers()})
  //   .pipe(catchError(this.error))
  // }
  // get(endpoint:string){
  //   return this.http.post(`${this.url}/${endpoint}`,{headers:this.Headers()})
  //   .pipe(catchError(this.error))
  // }
  // Pagination(query:any,paginationData:any, start:number = 0, limit:number = 20, filters?:any){
  //   return this.client.watchQuery({
  //     query,
  //     variables:{
  //       start,
  //       limit,
  //       filters,
  //     },
  //     context:{
  //       headers:this.GraphqlHeaders(),
  //     }
  //   })
  //   .valueChanges.pipe(
  //     map((result:any) => result.data[paginationData]),
  //     catchError((error:any) => {
  //       console.error('Ocurrio un error:', error.message);
  //       message(error);
  //       return throwError(error);
  //     })
  //   )
  // }
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
