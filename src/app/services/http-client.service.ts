import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private url = '/api';
  addUpdate:boolean = false;
  submit:boolean = false;
  addCampo:boolean = false;
  private addFieldTableSource =  new BehaviorSubject<any>(null);
  addFieldTable$ = this.addFieldTableSource.asObservable();
  updateTable(data: any) {
    this.addFieldTableSource.next(data);
  }
  constructor(private http:HttpClient) { }
  private headersToken():HttpHeaders{
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
  private headersRefresh():HttpHeaders{
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
  private handleError(error: HttpErrorResponse): Observable<string>{
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
  get(endpoint:string):Observable<any>{
    return this.http.get(`${this.url}/${endpoint}`,{headers:this.headersToken()})
      .pipe(catchError(this.handleError));
    }
    closeSession(endpoint:string):Observable<any> {
      return this.http.get(`${this.url}/${endpoint}`, {headers:this.headersRefresh()})
      .pipe(catchError(this.handleError));
    }
    refresh(endpoint:string):Observable<any>{
      return this.http.get(`${this.url}/${endpoint}`,{headers:this.headersRefresh()})
      .pipe(catchError(this.handleError));
    }
  post(endpoint:string, data:any):Observable<any>{
    return this.http.post(`${this.url}/${endpoint}`,data,{headers:this.headersToken()})
      .pipe(catchError(this.handleError));
  }
  put(endpoint:string, data:any):Observable<any>{
    return this.http.put(`${this.url}/${endpoint}`,data,{headers:this.headersToken()})
      .pipe(catchError(this.handleError));
    }
    delete(endpoint:string):Observable<any>{
    return this.http.delete(`${this.url}/${endpoint}`,{headers:this.headersToken()})
    .pipe(catchError(this.handleError));
  }


}
