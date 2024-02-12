import { Component, EventEmitter, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { data } from 'src/app/utilities/interface/form';
import { RequestService } from 'src/app/services/request.service';
import { Dialog } from '@angular/cdk/dialog';
import { RelationsComponent } from 'src/app/shared/relations/relations.component';
import { RelationsData } from 'src/app/utilities/interface/relations';
import { ValidForm, ValidFormUpdate, update } from 'src/app/utilities/functions/form';
import { MatDialog } from '@angular/material/dialog';
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
  // submit = false;
  @Input({required:true}) formName!:string;
  @Input({required:true}) btn!:string;
  @Input({required:true}) update!:string;
  @Input({required:true}) formInfo!:data[];
  @Input()relation:boolean = false;
  constructor( public dialog:MatDialog){}
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
    if(this.id){
      update[this.formName](this.service,this.id,this.form,this.router);
    }
  }
  // if(this.formName == 'egress'){
  //   this.service.get('products/'+this.id).subscribe((data:any) =>{
  //     this.form.get('name_product')?.setValue(data.name);
  //   })
  // }
  // if(this.formName == 'income'){
  //   this.service.get('products/'+this.id).subscribe((data:any) =>{
  //     this.form.get('product')?.setValue(data.name);
  //     this.form.get('price')?.setValue(data.price);
  //     this.form.get('price')?.disable()
  //   })
  // }
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  Relations(field:string){
    console.log(this.form.value);
    const data:RelationsData = {
      field:field,
      form:this.form
    }
    const dialogRef:any = this.dialog.open(RelationsComponent,{data})
    dialogRef.afterClosed().subscribe((result:any) => {
      console.log(this.form.value)
      // console.log('The dialog was closed');
    });
  }
  Form(){
    // console.log(this.formName);
    if(this.id){
      return ValidFormUpdate(this.formName,this.id,this.service,this.form,this.router);
    }else{
      return ValidForm(this.relation,this.formName,this.service,this.form,this.router,this.recaptcha);
    }
    // if(!this.relation){
    //   this.service.submit.set(true);
    //   if(this.form.invalid){
    //     this.service.submit.set(false);
    //     return message('Form is invalid','error');
    //   }
    //   this.service.addUpdate.set(true);
    //   FormManager[this.formName](this.service,this.form,this.router,this.recaptcha)
    // }else{
    //   console.log('Relation')
    //   this.service.submit.set(true);
    //   if(this.form.invalid){
    //     this.service.submit.set(false);
    //     return message('Form is invalid','error');
    //   }
    //   this.service.addUpdate.set(true);
    //   FormMaganerRelation[this.formName](this.service,this.form,this.routes);
    // }
  }
  // isAnyFieldFilled(formGroup: FormGroup): boolean {
  //   return Object.values(formGroup.controls).some(control =>
  //     control instanceof FormControl && control.value !== null && control.value !== undefined && control.value !== ''
  //   );
  // }
}
