import { Component } from '@angular/core';
import { data } from 'src/app/utilities/interface/form';
import { info } from 'src/app/utilities/variables/form';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {
  formInfo:data[] = info.register;
  formName:string = 'register';
}
