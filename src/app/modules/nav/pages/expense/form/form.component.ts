import { Component } from '@angular/core';
import { data } from 'src/app/utilities/interface/form';
import { info } from 'src/app/utilities/variables/form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent {
  formInfo:data[] = info.expense;
  formName:string = 'expense';
}
