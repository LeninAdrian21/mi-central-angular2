import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClientService } from './http-client.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private service:HttpClientService, private router:Router ) {
    const token = localStorage.getItem('token');
    const refresh = localStorage.getItem('refresh_token');
    if(token){
      this.RefreshTokenExpired(token)
    }
    if(refresh){
      this.VerifyRefreshtokenExpired(refresh);
    }
  }
  RefreshTokenExpired(token:string){
    try {
      const parts = token.split('.');
      if(parts.length === 3){
        const expired = this.Expired(parts);
        if(expired){
          this.service.refresh('custom-users/refresh/token').subscribe(data =>{
            console.log(data,'data loggin');
            const {token} = data;
            localStorage.setItem('token', token);
            this.router.navigate(['home']);
          })
        }
      }
    } catch (error) {
      this.service.refresh('custom-users/refresh/token').subscribe(data =>{
        console.log(data,'data loggin');
        const {token} = data;
        localStorage.setItem('token', token);
        this.router.navigate(['home']);
      })
    }
  }
  VerifyRefreshtokenExpired(refresh:any){
    const parts = refresh.split('.');
    if(parts.length === 3){
      const expired = this.Expired(parts);
      if(expired){
        localStorage.clear();
        this.router.navigate(['auth/login']);
      }
    }
  }
  Expired(parts:any){
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
    // return currentTimeInSeconds >= expirationTimeSeconds;
  }
  getRole(): Observable<string> {
    return this.service.get('custom-users/decrypt/role').pipe(map((response: any) => response.role));
  }
}
