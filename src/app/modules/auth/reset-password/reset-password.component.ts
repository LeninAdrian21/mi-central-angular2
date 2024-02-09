import { Component } from '@angular/core';
import { data } from 'src/app/utilities/interface/form';
import { info } from 'src/app/utilities/variables/form';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  formInfo:data[] = info.resetPassword;
  formName:string = 'resetPassword';
}
