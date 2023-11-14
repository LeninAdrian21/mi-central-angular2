import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataItem } from 'src/app/interfaces/formData';
import { formData } from 'src/app/shared/form/form';
import { AuthService } from '../../../services/auth.service';
import { HttpClientService } from 'src/app/services/http-client.service';
import { GraphqlService } from 'src/app/services/graphql.service';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.scss']
})
export class LogginComponent{
  token:any = localStorage.getItem('token');
  formInfo:FormDataItem[] = formData.loggin;
  constructor(private router:Router,private auth:AuthService, service:HttpClientService, graphql:GraphqlService){
    if(localStorage.getItem('token')){
      router.navigate(['/home']);
    }
  }
  VerifyTokenExpired(token: string){
    const parts = token.split('.');
    if(parts.length === 3){
      let expired = this.Expired(parts);
      return expired
    }
    return
  }
  Expired(parts:any){
    const tokenPayload = JSON.parse(atob(parts[1]));
    const expirationTimeSeconds = tokenPayload.exp;
    const currentTimeInSeconds = Math.floor(Date.now() / 1000);
    const timeRemaining = expirationTimeSeconds - currentTimeInSeconds;
    console.log("Tiempo restante para la expiración en segundos:", timeRemaining);

    // Convertir segundos a minutos y horas para una visualización más amigable
    const minutesRemaining = Math.floor(timeRemaining / 60);
    const hoursRemaining = Math.floor(minutesRemaining / 60);

    console.log("Tiempo restante para la expiración en minutos:", minutesRemaining);
    console.log("Tiempo restante para la expiración en horas:", hoursRemaining);

    // Calcular la hora exacta de expiración
    const expirationDate = new Date(expirationTimeSeconds * 1000);
    console.log("Hora exacta de expiración:", expirationDate.toLocaleString());
    return expirationTimeSeconds < currentTimeInSeconds;
    // return currentTimeInSeconds >= expirationTimeSeconds;
  }
}
