import { Component } from '@angular/core';
import { FormDataItem } from 'src/app/interfaces/formData';
import { formData } from 'src/app/shared/form/form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  formInfo:FormDataItem[] = formData.egress;
}
