import { Component } from '@angular/core';
import { data } from 'src/app/utilities/interface/form';
import { info } from 'src/app/utilities/variables/form';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {
  formInfo:data[] = info.login;
  formName:string = 'login';
}
