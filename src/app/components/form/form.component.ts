import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { data } from 'src/app/utilities/interface/form';
import { RequestService } from 'src/app/services/request.service';
import { Dialog } from '@angular/cdk/dialog';
import { RelationsComponent } from 'src/app/shared/relations/relations.component';
import { RelationsData } from 'src/app/utilities/interface/relations';
import { FormManager,FormMaganerRelation, ValidForm } from 'src/app/utilities/functions/form';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form!:FormGroup;
  service = inject(RequestService);
  router = inject(Router);
  routes = inject(ActivatedRoute);
  recaptcha=inject(ReCaptchaV3Service);
  activatedRoute = inject(ActivatedRoute);
  formBuilder = inject(FormBuilder);
  hidePassword: boolean = true;
  id:any;
  submit = false;
  @Input({required:true}) formName!:string;
  @Input({required:true}) btn!:string;
  @Input({required:true}) update!:string;
  @Input({required:true}) formInfo!:data[];
  @Input()relation:boolean = false;
  constructor(private dialog:Dialog){}
  ngOnInit(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.Token.set(this.activatedRoute.snapshot.paramMap.get('token') as string);
    this.form = this.formBuilder.group({});
    this.formInfo.map((info: data) => {
      const control = this.formBuilder.control({
        value: info.default,
        disabled: info.disabled
      },info.validators);
      this.form.addControl(info.name,control);
    })
    if(this.formName == 'egress'){
      this.service.get('products/'+this.id).subscribe((data:any) =>{
        this.form.get('name_product')?.setValue(data.name);
      })
    }
    if(this.formName == 'income'){
      this.service.get('products/'+this.id).subscribe((data:any) =>{
        this.form.get('product')?.setValue(data.name);
        this.form.get('price')?.setValue(data.price);
        this.form.get('price')?.disable()
      })
    }
  }
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  Relations(field:string){
    const data:RelationsData = {
      field:field
    }
    const dialogRef = this.dialog.open(RelationsComponent,{data})
  }
  Form(){
    if(!this.relation){
      ValidForm(this.service,this.form)
      FormManager[this.formName](this.service,this.form,this.router,this.recaptcha)
    }else{
      ValidForm(this.service,this.form);
      FormMaganerRelation[this.formName](this.service,this.form,this.routes);
    }
  }
}
