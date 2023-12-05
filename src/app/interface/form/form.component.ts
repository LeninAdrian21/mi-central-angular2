import { Component, Input } from '@angular/core';
import { FormDataItem } from 'src/app/interfaces/formData';


@Component({
  selector: 'app-interface-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  /**
   * @param {string} title  Es el titulo del formulario
   */
  @Input() title: string = '';
  @Input() formName:string = '';
  @Input() btn:any
  @Input() update:any;
  @Input() formInfo:FormDataItem[] = [];
}
