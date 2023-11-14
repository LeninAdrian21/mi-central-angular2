import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { FormData, FormDataItem } from 'src/app/interfaces/formData';
import { HttpClientService } from 'src/app/services/http-client.service';
import { Form, FormRelations} from 'src/app/shared/functions/form/form';
import { tableRelations } from '../../shared/form/tableRelations';
import { MatDialog } from '@angular/material/dialog';
import { RelationsComponent } from 'src/app/interface/dialog/relations/relations.component';
import { ComponentsService } from 'src/app/services/components.service';
import { GraphqlService } from 'src/app/services/graphql.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-features-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form!:FormGroup;
  hidePassword:any = true;
  tableRelations:any = tableRelations;
  @Input() formInfo:FormDataItem[] = [];
  @Input() formName:any;
  @Input() btn: any = 'Add';
  @Input() update:any;
  @Input() relations:boolean= false;
  @Input() nameTable:string = '';
  @Input() newData:any;
  newDat2:any;
  constructor(
    public service:HttpClientService,
    private formBuilder:FormBuilder,
    private router:Router,
    private recaptcha: ReCaptchaV3Service,
    private dialog:MatDialog,
    private component:ComponentsService,
    private graphql:GraphqlService,
  ){}
  ngOnInit(): void {
    this.form = this.formBuilder.group({});
    this.formInfo.map((info: any) =>{
      const control = this.formBuilder.control({value:info.default, disabled:info.disabled}, info.validators);
      this.form.addControl(info.name, control);
    });
  }
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  Relations(field:string,tableRelations:any){
    console.log(field)
    const dialog = this.dialog.open(RelationsComponent,{height:'560px',width:'1250px',data:{field,tableRelations}});
    dialog.afterClosed().subscribe((data:any) =>{
      console.log(data);
      if(data.data){
        this.form.value[data.field] = data.data;
      }
    })
  }
  Form(){
    if(this.relations){
      // this.component.newData$.subscribe(data =>{
      //   this.newDat2 = data;
      // });
      // const info = [
      //   ... this.newDat2,
      //   {id:'559595', name:'New'}
      // ]
      // this.component.updateNewData(info);
      FormRelations.call(this,this.nameTable,this.service,this.component,this.form);
    }else{
      Form.call(this,this.formName,this.service,this.form,this.router,this.recaptcha);
    }
  }
}
