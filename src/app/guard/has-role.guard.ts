import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RequestService } from '../services/request.service';
import {  catchError, map, of, switchMap, tap } from 'rxjs';
import { message } from '../utilities/functions/message';

export const hasRoleGuard: CanActivateFn = (route, state) => {
  const service = inject(RequestService);
  const router = inject(Router);
  const allowedRoles = route.data?.['allowedRoles'];
  return service.startCheckingAuthStatus().pipe(
    switchMap((isLoggedIn) => {
      if (isLoggedIn) {
        return service.getRole().pipe(
          map(userRole => {
            if (checkRoleValidity(userRole, allowedRoles)) {
              return true;
            } else {
              return router.parseUrl('/home');
            }
          }),
          catchError(() => of(router.parseUrl('/home')))
        );
      } else {
        return of(router.parseUrl('/auth/login'));
      }
    }),
    catchError(() => {
      return of(router.parseUrl('/auth/login'));
    })
  );
};
function checkRoleValidity(userRole: string, allowedRoles: string[]):boolean
 {
  return allowedRoles.includes(userRole);
}

