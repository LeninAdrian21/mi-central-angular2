import { Component, inject } from '@angular/core';
import { Nav } from 'src/app/utilities/interface/nav';
import { NavService } from './services/nav.service';
import { nav } from 'src/app/utilities/variables/nav';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [
  ]
})
export class NavComponent {
  isLoggedIn!: boolean;
  nav:Nav[]  = [];
  navegation = inject(NavService);
  token:string = localStorage.getItem('token') as string;
  refreshToken:string = localStorage.getItem('refresh_token') as string;
  service = inject(RequestService);
  ngOnInit(){
    this.startAuthStatusCheck();
    if(this.isLoggedIn  == true){
      this.navegation.getNav().subscribe(nav => this.nav = nav);
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

  LogOut() {}
}
