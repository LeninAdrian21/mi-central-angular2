import { Component, inject } from '@angular/core';
import { Nav } from 'src/app/utilities/interface/nav';
import { NavService } from './services/nav.service';
import { nav } from 'src/app/utilities/variables/nav';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { message } from 'src/app/utilities/functions/message';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [
  ]
})
export class NavComponent {
  isLoggedIn!: boolean;
  nav:Nav[]  = [];
  service = inject(RequestService);
  token:string = localStorage.getItem('token') as string;
  refreshToken:string = localStorage.getItem('refresh_token') as string;
  ngOnInit(){
    this.startAuthStatusCheck();
    if(this.isLoggedIn  == true){
      this.service.getNav().subscribe(nav => this.nav = nav);
    }
  }
  constructor(private router:Router){
  }
  startAuthStatusCheck(): void {
    this.service.startCheckingAuthStatus().subscribe(isLoggedIn => {
      console.log(isLoggedIn);
      this.isLoggedIn = isLoggedIn;
      if (!isLoggedIn) {

        this.router.navigate(['/auth/login']);
      }
    });
  }

  LogOut() {
    this.service.LogOut('custom-users/close/session').subscribe((data:any) =>{
      message(data.message, 'success');
      setTimeout(() =>{
        localStorage.clear();
        this.router.navigate(['auth/login']);
      },2000)
    }, (err) =>{
      console.log(err);
      message('No se a podido cerrar la sesion');
    })
  }
}
