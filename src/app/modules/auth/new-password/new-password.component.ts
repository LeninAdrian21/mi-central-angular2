import { Component } from '@angular/core';
import { data } from 'src/app/utilities/interface/form';
import { info } from 'src/app/utilities/variables/form';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent {
  formInfo:data[] = info.newPassword;
  formName:string = 'newPassword';
}
