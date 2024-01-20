import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { data } from 'src/app/utilities/interface/form';
import { RequestService } from 'src/app/services/request.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form!:FormGroup;
  service = inject(RequestService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  recaptcha=inject(ReCaptchaV3Service);
  activatedRoute = inject(ActivatedRoute);
  formBuilder = inject(FormBuilder);
  hidePassword: boolean = true;
  id:any;
  @Input({required:true}) formName!:string;
  @Input({required:true}) btn!:string;
  @Input({required:true}) update!:string;
  @Input({required:true}) formInfo!:data[];
  ngOnInit(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.form = this.formBuilder.group({});
    this.formInfo.map((info: data) => {
      const control = this.formBuilder.control({
        value: info.default,
        disabled: info.disabled
      },info.validators);
      this.form.addControl(info.name,control);
    })
  }
  togglePasswordVisibility() {}
  Relations(){}
  Form(){}
}
