import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { map, tap } from 'rxjs';
import { Message } from '../shared/functions/message';
import { HttpClientService } from '../services/http-client.service';
export const roleGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const service = inject(HttpClientService);
  if(localStorage.getItem('token')){
    const parts:any = localStorage.getItem('token')?.split('.');
    if(parts.length === 3){
      let expired = (parts:any) => {
        const tokenPayload = JSON.parse(atob(parts[1]));
        const expirationTimeSeconds = tokenPayload.exp;
        const currentTimeInSeconds = Math.floor(Date.now() / 1000);
        const timeRemaining = expirationTimeSeconds - currentTimeInSeconds;
        // console.log("Tiempo restante para la expiración en segundos:", timeRemaining);
        // Convertir segundos a minutos y horas para una visualización más amigable
        const minutesRemaining = Math.floor(timeRemaining / 60);
        const hoursRemaining = Math.floor(minutesRemaining / 60);

        // console.log("Tiempo restante para la expiración en minutos:", minutesRemaining);
        // console.log("Tiempo restante para la expiración en horas:", hoursRemaining);

        // Calcular la hora exacta de expiración
        const expirationDate = new Date(expirationTimeSeconds * 1000);
        // console.log("Hora exacta de expiración:", expirationDate.toLocaleString());
        return expirationTimeSeconds < currentTimeInSeconds;
      }
      const verifyExpired = expired(parts);
      if(verifyExpired) {
        service.refresh('custom-users/refresh/token').subscribe(data =>{
          console.log(data,'data loggin');
          const {token} = data;
          localStorage.setItem('token', token);
        })
      }
    }
    const allRoles = route.data?.['allRoles'];
    return auth.getRole().pipe(
      tap((userRole) => {
        if (!allRoles.includes(userRole)) {
          Message('Not authorized');
          setTimeout(() => {
            router.navigate(['home']);
          },1700)
        }
      }),
      map((userRole) => allRoles.includes(userRole))
    );
  }else{
    Message('Not logged in');
    router.navigate(['/auth/loggin']);
    return false;
  }
};

