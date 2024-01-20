import { Component, inject } from '@angular/core';
import { Nav } from 'src/app/utilities/interface/nav';
import { NavService } from './services/nav.service';
import { nav } from 'src/app/utilities/variables/nav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [
  ]
})
export class NavComponent {
  nav:Nav[]  = [];
  navegation = inject(NavService);
  ngOnInit(){
    this.nav = nav
    // this.navegation.getNav().subscribe(nav => this.nav = nav);
  }
  LogOut() {}
}
