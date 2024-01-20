import { Component } from '@angular/core';
import { data } from '../../../../../utilities/interface/form';
import { info } from '../../../../../utilities/variables/form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent {
  formInfo:data[] = info.history;
  formName:string = 'history';
}
