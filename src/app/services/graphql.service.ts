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
  headers = new HttpHeaders().set('authenticated','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkRaNWZvdnhTSjVzMUNyNXN5NFhQb2FBWGovckhxdk1udzZRWEd6WVlJQ2M9Iiwicm9sZSI6ImFQaTJwRUdKaS9iR00vSjIvQVI2VW5icERLcG5tdXVmU0lYYytyUlpkQVR3dzNHcHR5YWNWSXVsRzZFYmVBSk53VW9VQ0w3RS8wL08rM1M0T05FengyaDZZWG5GTi9SOWxlcENUN1cxUEhqU2J6UGU4YWlDaUVBbkxVSVJEVmNWWERwMDR1SGZYaHhlNWxMUkhGeisxNFpjOG5CVVdwbG9WdWh0S05oRzFETT0iLCJrZXlQcml2YXRlIjoiZzZqSkJETjU1NU1NTWFodDNFaysvNHkxNCtmR2hhOFpxamlUSzVtaU8yRGQzMlJNWU1UbVBnSUVXQ0dRTG5NNVAvVi8vTnArdHVRUkRweGh2YlJSVUV4ek1HMkpHVlpJbWduMHQwczF1aVlidFBoOGNDaTZWQ0tTU0c1Zk9uK1psOXE2QjgvbHVsTE5LdU12ZDcyL1dZZlhIRVR0ejhPZ20rTFA4UDhWTkNKM0VOdGZRSFE5eVpoQ1FELzM0aFpudC92eWladjRNdmM1UmpTdEE0RnVJZXZKazViVVo3WlQvS01OVWE5d1pkUGtSL0tmQkE5MmpaL1paT0c4SHQwUldkc1BESFdYdmhxMkRYUG9FbkRXYVlWNjlGUjNNTWdIZVM5QUNaSDlzZG5HaFNQSUtuUStqWDlXZ2t3ejFKbGNNNk9wRnFLUkdnWE5mR1lvUXJFRU5BQll0c0kvZ2hUckZZVkxHckQ1RkV6bEg1T3hSNlA2QmZBTC9NTzlSWVI3VW5wYVg0b1ZTNE45RjBKUloycFIvUDZQdGQ3dzhmQnBuSmNSTllMUEdsZDRNWXJMUlR3V3gyVlRlMkZ5V0U3eXluYmRuSUlMRXBkNGZRbTR6KzBkdzdzUHpXYWZ0cDlIMDVwb1VBSTRPMFZCQmxDMmd1cjhOMGtoQ0JjZHhNN1pSbmVFTkkxTnpoT08rWnh1NnVxY3JGQ0tlbWlucDkwNmNwMDVSdmZBdXA4aVRXd2E3Sk5oeHFNTXJzYUNjTmRlTnU3R3VZcDNOWXpja2FxRm05cFJLZWw1T1hJNGE1dEFDMXF6V3F3bGVzU1ZFZGphZlNuMmVoWkFKK2lKcDhtcnJhb0lqSjJ1bG13ZkcvcjNRbW5vV1l6YVhjeEM5QTQ5ZU5menB6N1V4NHVEdXJBcG1LTVcyM1BYREQxbWV0YVFTRVlFOHRNN2luSWYvUExteE43UHZISGlMSEVXeUxyNVdLdjZneW9ndWV3VHlJN3k2bTMvQU1Bd1lUUk82K2RESzN2K3RJbHcwZUt0ZktjL3ZGZmxscGFpSTdJQmhzWmpPb1UxUDIxbmp2bm1tU2FPa0hSTGxMaEJtWnJuWVhYTDVHSFVoa0ZvMEpXOHFCTllFWDVYMzJDSkxmT2NtNnBMbFhheGFVODNMSE9Ba0NNeHdPQUxKU0dnaWdiL2Jmd2wwYW5hMUpOK1NqeTZZRllwYVI2SVZGU1FDcTdzYUhHc1VZb0RpOW4rL05FUk5yVTBWOExvTVZXUkY5dk55RmgzR25ZaXQ5a0p3K3F5T2ZzV2JySDRGcXlkRng1Z01pZEJDeFo0T2xrNFpwWnR5b1NiUTM4SGtyVnRhalJ3VzhTSmNmR1dIdGhGOHhKSjFRcXdkVVByWmErMzFYWXpFbTUxVG0yaDUxUWRrYmNoVVVMYTcxcE45aHBGV016SVhYN0VMOXYxSk0zdXhGVnB5Q2Vzc2Q3L0hITjdRWU4yZWJEYjhWMkYxM0xjN1RZQVhmNDFQMUVmQXZTTC9iMndkWDZ2NGFjSHdERlVJeGgvbFJNRUNCUEk5YisvSndEQ001emYyVVFPdUdFd05tVT0iLCJsYXN0X2xvZ2dpbiI6IjIwMjMtMTEtMTNUMjM6MjY6MjIuMzE0WiIsImlhdCI6MTY5OTkxNzk4MywiZXhwIjoxNjk5OTE4NTgzfQ.QuGVzKAhNPYhFtVjFAtsL_hFd2ucSeO2Hcqi1vXEF1o');
  // headers = new HttpHeaders().set('authenticated',`Bearer ${localStorage.getItem('token')}`);
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
