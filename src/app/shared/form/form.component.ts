import { Component, Input } from '@angular/core';
import { data } from 'src/app/utilities/interface/form';
@Component({
  selector: 'shared-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent {
  @Input({required:true}) formInfo!:data[];
  @Input({required:true}) formName!:string;
  @Input({required:true}) title!:string;
  @Input({required:true}) btn!:string;
  @Input({required:true}) update!: string;
}
