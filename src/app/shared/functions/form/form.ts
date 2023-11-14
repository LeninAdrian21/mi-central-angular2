import { HttpClientService } from "../../../services/http-client.service";
import { FormGroup } from "@angular/forms";
import { Message } from "../message";
import { fucntionsFormRelations, functionsForm } from "./functionsForm";
import { Router } from "@angular/router";
import { ReCaptchaV3Service } from "ng-recaptcha";
import { FormDataItem } from "src/app/interfaces/formData";
import { ComponentsService } from "src/app/services/components.service";
export function Form (formName:any,service:HttpClientService,form:FormGroup,router:Router,recaptcha:ReCaptchaV3Service,id?:string) {
  service.submit = true;
  if(form.invalid){
    return Message('Form is invalid');
  }
  service.addUpdate = true;
  return functionsForm[formName](service,form,router,recaptcha)
}
export function FormRelations(nameTable:any,service:HttpClientService,component:ComponentsService,form:FormGroup){
  let info:any;
  component.newData$.subscribe( data =>{
    info = data;
  });
  service.submit = true;
  if(form.invalid){
    return Message('Form is invalid');
  }
  service.addUpdate = true;
  return fucntionsFormRelations[nameTable](service,component,form,info);
}

export { Message };
