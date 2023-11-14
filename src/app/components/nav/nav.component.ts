import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavData } from 'src/app/interfaces/navData';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClientService } from 'src/app/services/http-client.service';
import { NavService } from './services/nav.service';
import { Message } from 'src/app/shared/functions/message';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  nav!:NavData[];
  constructor (private navegation: NavService, private service:HttpClientService, private router:Router){}
  ngOnInit(): void {
    this.navegation.getNav().subscribe(data => this.nav = data)
  }
  LogOut(){
    this.service.closeSession('custom-users/close/session').subscribe(data => {
      Message(data.message,'success')
      setTimeout(() => {
        localStorage.clear();
        this.router.navigate(['auth/login']);
      },2000)
    },(error) => {
      console.log(error.message);
      Message('The session could not be closed');
    })
  }
}
