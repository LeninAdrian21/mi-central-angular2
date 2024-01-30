import { FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
export const FormManager:any = {
  login:(service:any,form:FormGroup, routes:ActivatedRoute, recaptcha:any,id?:any) => {
    recaptcha.execute('').subscribe(async (token:any) => {
      const data = Object.assign(form.value, {recaptcha:token});
    })
  },
  register:(service:any,form:FormGroup, routes:ActivatedRoute, recaptcha:any,id?:any) => {
    recaptcha.execute('').subscribe(async (token:any) => {
      let data = Object.assign(form.value,{recaptcha:token});
    })
  },
  cart:(service:any,form:FormGroup, routes:ActivatedRoute, recaptcha:any,id?:any) => {
    let data = form.value;
  },
  credit:(service:any,form:FormGroup, routes:ActivatedRoute, recaptcha:any,id?:any) => {
    let data = form.value;
  },
  dimension:(service:any,form:FormGroup, routes:ActivatedRoute, recaptcha:any,id?:any) => {
    let data = form.value;
  },
  egress:(service:any,form:FormGroup, routes:ActivatedRoute, recaptcha:any,id?:any) => {
    let data = form.value;
  },
  expense:(service:any,form:FormGroup, routes:ActivatedRoute, recaptcha:any,id?:any) => {
    let data = form.value;
  },
  history:(service:any,form:FormGroup, routes:ActivatedRoute, recaptcha:any,id?:any) => {
    let data = form.value;
  },
  income:(service:any,form:FormGroup, routes:ActivatedRoute, recaptcha:any,id?:any) => {
    let data = form.value;
  },
  lot:(service:any,form:FormGroup, routes:ActivatedRoute, recaptcha:any,id?:any) => {},
  payment:(service:any,form:FormGroup, routes:ActivatedRoute, recaptcha:any,id?:any) => {},
  payment_method:(service:any,form:FormGroup, routes:ActivatedRoute, recaptcha:any,id?:any) => {},
  premise:(service:any,form:FormGroup, routes:ActivatedRoute, recaptcha:any,id?:any) => {},
  product:(service:any,form:FormGroup, routes:ActivatedRoute, recaptcha:any,id?:any) => {},
  prmotion:(service:any,form:FormGroup, routes:ActivatedRoute, recaptcha:any,id?:any) => {},
  provider:(service:any,form:FormGroup, routes:ActivatedRoute, recaptcha:any,id?:any) => {},
  purchase:(service:any,form:FormGroup, routes:ActivatedRoute, recaptcha:any,id?:any) => {},
  role:(service:any,form:FormGroup, routes:ActivatedRoute, recaptcha:any,id?:any) => {},
  route:(service:any,form:FormGroup, routes:ActivatedRoute, recaptcha:any,id?:any) => {},
  sale:(service:any,form:FormGroup, routes:ActivatedRoute, recaptcha:any,id?:any) => {},
  seller:(service:any,form:FormGroup, routes:ActivatedRoute, recaptcha:any,id?:any) => {},
  truck:(service:any,form:FormGroup, routes:ActivatedRoute, recaptcha:any,id?:any) => {},
  user:(service:any,form:FormGroup, routes:ActivatedRoute, recaptcha:any,id?:any) => {},
}
export const FormMaganerRelation:any={
  carts:(service:any,form:FormGroup, routes:ActivatedRoute) => {},
  credit:(service:any,form:FormGroup, routes:ActivatedRoute) => {},
  credits:(service:any,form:FormGroup, routes:ActivatedRoute,) => {},
  dimension:(service:any,form:FormGroup, routes:ActivatedRoute,) => {},
  egress:(service:any,form:FormGroup, routes:ActivatedRoute,) => {},
  egresses:(service:any,form:FormGroup, routes:ActivatedRoute,) => {},
  expenses:(service:any,form:FormGroup, routes:ActivatedRoute,) => {},
  histories:(service:any,form:FormGroup, routes:ActivatedRoute,) => {},
  income:(service:any,form:FormGroup, routes:ActivatedRoute,) => {},
  lot:(service:any,form:FormGroup, routes:ActivatedRoute,) => {},
  lots:(service:any,form:FormGroup, routes:ActivatedRoute,) => {},
  payment:(service:any,form:FormGroup, routes:ActivatedRoute,) => {},
  payments:(service:any,form:FormGroup, routes:ActivatedRoute,) => {},
  payment_method:(service:any,form:FormGroup, routes:ActivatedRoute,) => {},
  payment_methods:(service:any,form:FormGroup, routes:ActivatedRoute,) => {},
  premise:(service:any,form:FormGroup, routes:ActivatedRoute,) => {},
  premises:(service:any,form:FormGroup, routes:ActivatedRoute,) => {},
  products:(service:any,form:FormGroup, routes:ActivatedRoute,) => {},
  prmotions:(service:any,form:FormGroup, routes:ActivatedRoute,) => {},
  provider:(service:any,form:FormGroup, routes:ActivatedRoute,) => {},
  purchases:(service:any,form:FormGroup, routes:ActivatedRoute,) => {},
  role:(service:any,form:FormGroup, routes:ActivatedRoute,) => {},
  routes:(service:any,form:FormGroup, routes:ActivatedRoute,) => {},
  sale:(service:any,form:FormGroup, routes:ActivatedRoute,) => {},
  sales:(service:any,form:FormGroup, routes:ActivatedRoute,) => {},
  sellers:(service:any,form:FormGroup, routes:ActivatedRoute,) => {},
  truck:(service:any,form:FormGroup, routes:ActivatedRoute,) => {},
  trucks:(service:any,form:FormGroup, routes:ActivatedRoute,) => {},
  custom_user:(service:any,form:FormGroup, routes:ActivatedRoute,) => {},
  custom_users:(service:any,form:FormGroup, routes:ActivatedRoute,) => {},
  client:(service:any,form:FormGroup, routes:ActivatedRoute,) => {},
  users:(service:any,form:FormGroup, routes:ActivatedRoute,) => {},
}
