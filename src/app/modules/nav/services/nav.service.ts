import { Injectable, inject, signal } from '@angular/core';
import { RequestService } from '../../../services/request.service';
import { Observable, map } from 'rxjs';
import { nav } from 'src/app/utilities/variables/nav';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  service = inject(RequestService);
  role = signal('');
  getRole():Observable<string>{
    return this.service.get('custom-users/decrypt/role')
      .pipe(map(({role}:any) => {
        this.role.set(role.role);
        return role;
      }))
  }
  getNav():Observable<any>{
    return this.getRole().pipe(
      map((response) => {
        return nav.filter(({roles}:any) => roles.includes(response));
      })
    )
  }
}
