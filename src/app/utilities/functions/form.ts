import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { RequestService } from "src/app/services/request.service";
import { message } from "./message";
import { filter } from '../variables/filter';
export const ValidForm = (service:RequestService,form:FormGroup) => {
  service.submit.set(true);
  if(form.invalid){
    return message('Form is invalid','error');
  }
  service.addUpdate.set(true);
}
export const FormManager:any = {
  login:(service:RequestService,form:FormGroup, router:Router, recaptcha:any) => {
    recaptcha.execute('').subscribe(async (token:any) => {
      let data:any = Object.assign(form.value, {recaptcha:token});
      console.log(data);
      service.post('custom-users/loggin', data).subscribe((data:any) => {
        const {token,refreshToken} = data;
        localStorage.setItem('token',token);
        localStorage.setItem('refresh_token',refreshToken);
        message('Successfully logged in','success');
        setTimeout(() => {
          service.submit.set(false);
          service.addUpdate.set(false);
          router.navigate(['/home']);
        },2000);
      },(error:any) => {
        message(error);
        service.submit.set(false);
        service.addUpdate.set(false);
      })
    });
  },
  register:(service:RequestService,form:FormGroup, router:Router, recaptcha:any) => {
    recaptcha.execute('').subscribe(async (token:any) => {
      let data = Object.assign(form.getRawValue(),{recaptcha:token});
      console.log(data);
      service.post('custom-users', data).subscribe((data:any) => {
        message('User registered successfully!. Check your email','success');
        setTimeout(() => {
          service.submit.set(false);
          service.addUpdate.set(false);
          router.navigate(['/auth/login']);
        });
      },(error:any) => {
        message(error.error.message,'error');
        service.submit.set(false);
        service.addUpdate.set(false);
      })
    })
  },
  resetPassword:(service:RequestService,form:FormGroup, router:Router, recaptcha:any) => {
    let data = form.getRawValue()
    service.post('custom-users/reset-password', data).subscribe((data:any) => {
      message('Check your email, a link is sent to reset password','success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/auth/login']);
      });
    },(error:any) => {
      message(error,'error');
      service.submit.set(false);
      service.addUpdate.set(false);
    })
  },
  newPassword:(service:RequestService,form:FormGroup, router:Router, recaptcha:any) => {
    let data = form.getRawValue();
    console.log(data);
    service.post('custom-users/new-password/'+ service.Token(), data).subscribe((data:any) => {
      message('Check your email, a link is sent to reset password','success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/auth/login']);
      });
    },(error:any) => {
      message(error,'error');
      service.submit.set(false);
      service.addUpdate.set(false);
    })
  },
  cart:(service:RequestService,form:FormGroup, router:Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.post('carts',data).subscribe((data:any)=>{
      message('Successfully added cart','success');
      setTimeout(() =>{
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/cart/list']);
      });
    })
  },
  credit: (service: RequestService, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('credits', data).subscribe(data => {
      message('Successfully added credit', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/credit/list']);
      });
    });
  },
  dimension: (service: RequestService, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('dimensions', data).subscribe(data => {
      message('Successfully added dimension', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/dimension/list']);
      });
    });
  },
  egress: (service: RequestService, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('egresses', data).subscribe(data => {
      message('Successfully added egress', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/egress/list']);
      });
    });
  },
  expense: (service: RequestService, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('expenses', data).subscribe(data => {
      message('Successfully added expense', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/expense/list']);
      });
    });
  },
  history: (service: RequestService, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('histories', data).subscribe(data => {
      message('Successfully added history', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/history/list']);
      });
    });
  },
  income: (service: RequestService, form: FormGroup, router: Router) => {
    let data = form.getRawValue();
    service.post('incomes', data).subscribe(data => {
      message('Successfully added income', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/income/list']);
      });
    });
  },
  lot: (service: RequestService, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('lots', data).subscribe(data => {
      message('Successfully added lot', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/lot/list']);
      });
    });
  },
  payment: (service: RequestService, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('payments', data).subscribe(data => {
      message('Successfully added payment', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/payment/list']);
      });
    });
  },
  payment_method: (service: RequestService, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('payment-methods', data).subscribe(data => {
      message('Successfully added payment method', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/payment-method/list']);
      });
    });
  },
  premise: (service: RequestService, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('premises', data).subscribe(data => {
      message('Successfully added premise', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/premise/list']);
      });
    });
  },
  product: (service: RequestService, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('products', data).subscribe(data => {
      message('Successfully added product', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/product/list']);
      });
    });
  },
  promotion: (service: RequestService, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('promotions', data).subscribe(data => {
      message('Successfully added promotion', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/promotion/list']);
      });
    });
  },
  provider: (service: RequestService, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('providers', data).subscribe(data => {
      message('Successfully added provider', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/provider/list']);
      });
    });
  },
  purchase: (service: RequestService, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('purchases', data).subscribe(data => {
      message('Successfully added purchase', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/purchase/list']);
      });
    });
  },
  role: (service: RequestService, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('role-types', data).subscribe(data => {
      message('Successfully added role', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/role/list']);
      });
    });
  },
  route: (service: RequestService, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('routes', data).subscribe(data => {
      message('Successfully added route', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/route/list']);
      });
    });
  },
  sale: (service: RequestService, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('sales', data).subscribe(data => {
      message('Successfully added sale', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/sale/list']);
      });
    });
  },
  seller: (service: RequestService, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('sellers', data).subscribe(data => {
      message('Successfully added seller', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/seller/list']);
      });
    });
  },
  truck: (service: RequestService, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('trucks', data).subscribe(data => {
      message('Successfully added truck', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/truck/list']);
      });
    });
  },
  user: (service: RequestService, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('custom-users', data).subscribe(data => {
      message('Successfully added user', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/user/list']);
      });
    });
  },
}
export const FormMaganerRelation:any={
  carts: (service: any, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('carts', data).subscribe((data: any) => {
      message('Successfully added carts', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/cart/list']);
      });
    });
  },
  credit: (service: any, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('credits', data).subscribe((data: any) => {
      message('Successfully added credit', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/credit/list']);
      });
    });
  },
  credits: (service: any, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('credits', data).subscribe((data: any) => {
      message('Successfully added credits', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/credit/list']);
      });
    });
  },
  dimension: (service: any, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('dimensions', data).subscribe((data: any) => {
      message('Successfully added dimension', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/dimension/list']);
      });
    });
  },
  egress: (service: any, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('egresses', data).subscribe((data: any) => {
      message('Successfully added egress', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/egress/list']);
      });
    });
  },
  egresses: (service: any, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('egresses', data).subscribe((data: any) => {
      message('Successfully added egresses', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/egress/list']);
      });
    });
  },
  expenses: (service: any, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('expenses', data).subscribe((data: any) => {
      message('Successfully added expenses', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/expense/list']);
      });
    });
  },
  histories: (service: any, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('histories', data).subscribe((data: any) => {
      message('Successfully added histories', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/history/list']);
      });
    });
  },
  income: (service: any, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('incomes', data).subscribe((data: any) => {
      message('Successfully added income', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/income/list']);
      });
    });
  },
  lot: (service: any, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('lots', data).subscribe((data: any) => {
      message('Successfully added lot', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/lot/list']);
      });
    });
  },
  lots: (service: any, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('lots', data).subscribe((data: any) => {
      message('Successfully added lots', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/lot/list']);
      });
    });
  },
  payment: (service: any, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('payments', data).subscribe((data: any) => {
      message('Successfully added payment', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/payment/list']);
      });
    });
  },
  payments: (service: any, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('payments', data).subscribe((data: any) => {
      message('Successfully added payments', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/payment/list']);
      });
    });
  },
  payment_method: (service: any, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('payment-methods', data).subscribe((data: any) => {
      message('Successfully added payment method', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/payment-method/list']);
      });
    });
  },
  payment_methods: (service: any, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('payment-methods', data).subscribe((data: any) => {
      message('Successfully added payment methods', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/payment-method/list']);
      });
    });
  },
  premise: (service: any, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('premises', data).subscribe((data: any) => {
      message('Successfully added premise', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/premise/list']);
      });
    });
  },
  premises: (service: any, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('premises', data).subscribe((data: any) => {
      message('Successfully added premises', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/premise/list']);
      });
    });
  },
  products: (service: any, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('products', data).subscribe((data: any) => {
      message('Successfully added products', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/products/list']);
      });
    });
  },
  promotions: (service: any, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('prmotions', data).subscribe((data: any) => {
      message('Successfully added prmotions', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/prmotion/list']);
      });
    });
  },
  provider: (service: any, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('providers', data).subscribe((data: any) => {
      message('Successfully added provider', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/provider/list']);
      });
    });
  },
  purchases: (service: any, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('purchases', data).subscribe((data: any) => {
      message('Successfully added purchases', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/purchase/list']);
      });
    });
  },
  role: (service: any, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('role-types', data).subscribe((data: any) => {
      message('Successfully added role', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/role/list']);
      });
    });
  },
  routes: (service: any, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('routes', data).subscribe((data: any) => {
      message('Successfully added routes', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/route/list']);
      });
    });
  },
  sale: (service: any, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('sales', data).subscribe((data: any) => {
      message('Successfully added sale', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/sale/list']);
      });
    });
  },
  sales: (service: any, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('sales', data).subscribe((data: any) => {
      message('Successfully added sales', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/sale/list']);
      });
    });
  },
  sellers: (service: any, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('sellers', data).subscribe((data: any) => {
      message('Successfully added sellers', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/seller/list']);
      });
    });
  },
  truck: (service: any, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('trucks', data).subscribe((data: any) => {
      message('Successfully added truck', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/truck/list']);
      });
    });
  },
  trucks: (service: any, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('trucks', data).subscribe((data: any) => {
      message('Successfully added trucks', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/truck/list']);
      });
    });
  },
  custom_user: (service: any, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('custom-users', data).subscribe((data: any) => {
      message('Successfully added custom_user', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/user/list']);
      });
    });
  },
  custom_users: (service: any, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('custom-users', data).subscribe((data: any) => {
      message('Successfully added custom_users', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/user/list']);
      });
    });
  },
  client: (service: any, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('custom-users', data).subscribe((data: any) => {
      message('Successfully added client', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/user/list']);
      });
    });
  },
  users: (service: any, form: FormGroup, router: Router) => {
    let data = form.value;
    service.post('custom-users', data).subscribe((data: any) => {
      message('Successfully added users', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/user/list']);
      });
    });
  },
}
