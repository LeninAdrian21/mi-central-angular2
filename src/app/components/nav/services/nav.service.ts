import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { NavData } from 'src/app/interfaces/navData';
import { HttpClientService } from 'src/app/services/http-client.service';
import { nav } from 'src/app/shared/nav/data';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor(private service: HttpClientService) { }
  getRole():Observable<string> {
    return this.service.get('custom-users/decrypt/role').pipe(map((response:any)=> response.role))
  }
  getNav():Observable <NavData[]> {
    return this.getRole().pipe(map((response:any)=> {
      return nav.filter((role:NavData) => role.roles.includes(response))
    }));
  }
}
