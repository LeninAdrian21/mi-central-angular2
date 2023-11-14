import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ReCaptchaV3Service } from "ng-recaptcha";
import { HttpClientService } from "src/app/services/http-client.service";
import { Message } from "../message";
import { Component } from '@angular/core';
import { ComponentsService } from "src/app/services/components.service";

export const functionsForm:any = {
  loggin:(service:HttpClientService, form:FormGroup,router:Router,recaptcha:ReCaptchaV3Service) => {
    recaptcha.execute('').subscribe(async (token:any) => {
      let data = Object.assign(form.getRawValue(),{recaptcha:token});
      // data = Object.fromEntries(Object.entries(data).filter(([_, value]) => value !== undefined && value !== null && value !== ''));
      // return console.log(data);
      service.post('custom-users/loggin',data).subscribe(data => {
        const {token, refreshToken} = data;
        localStorage.setItem('token', token);
        localStorage.setItem('refresh_token', refreshToken);
        Message('Successfully logged in','success');
        setTimeout(() => {
          service.submit = false;
          service.addUpdate = false;
          router.navigate(['/home']);
        },1700);
      },(error:any) => {
        Message(error);
        service.submit = false;
        service.addUpdate = false;
      })
    })
  },
  egress: (service:HttpClientService, form:FormGroup,router:Router,recaptcha:ReCaptchaV3Service,id?:string) => {
    let data = Object.fromEntries(Object.entries(form.value).filter(([_, value]) => value !== undefined && value !== null && value !== ''));
    if(id){
    }else{
      service.post('egresses',data).subscribe(data => {
        Message('Successfully added egress','success');
        setTimeout(() => {
          service.submit = false;
          service.addUpdate = false;
          service.updateTable(true);
          router.navigate(['/egress/list']);
        },1700);
      },(error:any) => {
        Message(error);
        service.submit = false;
        service.addUpdate = false;
      })
    }
  },
  income:(service:HttpClientService, form:FormGroup,router:Router,recaptcha:ReCaptchaV3Service,id?:string) => {
    let data = Object.fromEntries(Object.entries(form.value).filter(([_, value]) => value !== undefined && value !== null && value !== ''));
    console.log(data)
    if(id){

    }else{
      service.post('incomes',data).subscribe(data => {
        Message('Successfully added incomes','success');
        setTimeout(() => {
          service.submit = false;
          service.addUpdate = false;
          service.updateTable(true);
          router.navigate(['/income/list']);
        },1700);
      },(error:any) => {
        Message(error);
        service.submit = false;
        service.addUpdate = false;
      })
    }
  }
}
export const fucntionsFormRelations:any = {
  providers:(service:HttpClientService,component:ComponentsService,form:FormGroup,info:any, ) => {

    let data = Object.fromEntries(Object.entries(form.value).filter(([_, value]) => value !== undefined && value !== null && value !== ''));
    service.post('providers',data)
      .subscribe(data => {
        Message('Successfully added provider','success');
        service.submit = false;
        service.addUpdate = false;
        service.updateTable(true);
        component.updateNewData([...info,data]);
        form.reset();
      },(error) => {
        Message(error);
        service.submit = false;
        service.addUpdate = false;
      })
  },
  paymentMethods:(service:HttpClientService,component:ComponentsService,form:FormGroup,info:any) => {
    let data = Object.fromEntries(Object.entries(form.value).filter(([_, value]) => value !== undefined && value !== null && value !== ''));
    service.post('payment-methods',data)
      .subscribe(data => {
        Message('Successfully added payment method','success');
        service.submit = false;
        service.addUpdate = false;
        service.updateTable(true);
        component.updateNewData([...info,data]);
        form.reset();
      },(error) => {
        Message(error);
        service.submit = false;
        service.addUpdate = false;
      })
  },
  client:(service:HttpClientService,component:ComponentsService,form:FormGroup,info:any) => {
    let data = Object.fromEntries(Object.entries(form.value).filter(([_, value]) => value !== undefined && value !== null && value !== ''));
    service.post('custom-users',data)
      .subscribe(data => {
        Message('Successfully added Client','success');
        service.submit = false;
        service.addUpdate = false;
        service.updateTable(true);
        component.updateNewData([...info,data]);
        form.reset();
      },(error) => {
        Message(error);
        service.submit = false;
        service.addUpdate = false;
      })
  },
}
