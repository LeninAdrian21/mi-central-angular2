import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { RequestService } from "src/app/services/request.service";
import { message } from "./message";
import { filter } from '../variables/filter';
import { queryRelation } from "../variables/relations";
import Swal from "sweetalert2";
export const ValidForm = (relation:boolean,formName:string,service:RequestService,form:FormGroup, router:Router, recaptcha:any) => {
  service.submit.set(true);
  if(form.invalid){
    return message('Form is invalid','error');
  }
  service.addUpdate.set(true);
  return functionsForm(relation,formName,service,form, router, recaptcha);
}
const functionsForm = (relation:boolean,formName:string,service:RequestService,form:FormGroup, router:Router, recaptcha:any) => {
  if(relation){
    return FormRelationManager[formName](formName,service,form,router);
  }else{
    return FormManager[formName](service,form,router,recaptcha);
  }
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
    let data: any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) =>
        value !== undefined &&
        value !== null &&
        !(Array.isArray(value) && value.length === 0) &&
        !(typeof value === 'object' && Object.keys(value).length === 0) &&
        value !== ""
      )
    );
    service.post('carts',data).subscribe((data:any)=>{
      message('Successfully added cart','success');
      setTimeout(() =>{
        service.submit.set(false);
        service.addUpdate.set(false);
        service.entryCreated.set(true);
        router.navigate(['/cart/list']);
      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    })
  },
  credit: (service: RequestService, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.post('credits', data).subscribe(data => {
      message('Successfully added credit', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/credit/list']);
      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  dimension: (service: RequestService, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.post('dimensions', data).subscribe(data => {
      message('Successfully added dimension', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/dimension/list']);
      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  egress: (service: RequestService, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.post('egresses', data).subscribe(data => {
      message('Successfully added egress', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/egress/list']);
      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  expense: (service: RequestService, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.post('expenses', data).subscribe(data => {
      message('Successfully added expense', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/expense/list']);
      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  history: (service: RequestService, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.post('histories', data).subscribe(data => {
      message('Successfully added history', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/history/list']);
      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  income: (service: RequestService, form: FormGroup, router: Router) => {
    let data = form.getRawValue();
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.post('incomes', data).subscribe(data => {
      message('Successfully added income', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/income/list']);
      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  lot: (service: RequestService, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.post('lots', data).subscribe(data => {
      message('Successfully added lot', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/lot/list']);
      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  payment: (service: RequestService, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.post('payments', data).subscribe(data => {
      message('Successfully added payment', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/payment/list']);
      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  payment_method: (service: RequestService, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.post('payment-methods', data).subscribe(data => {
      message('Successfully added payment method', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/payment-method/list']);
      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  premise: (service: RequestService, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.post('premises', data).subscribe(data => {
      message('Successfully added premise', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/premise/list']);
      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  product: (service: RequestService, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.post('products', data).subscribe(data => {
      message('Successfully added product', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/product/list']);
      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  promotion: (service: RequestService, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.post('promotions', data).subscribe(data => {
      message('Successfully added promotion', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/promotion/list']);
      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  provider: (service: RequestService, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.post('providers', data).subscribe(data => {
      message('Successfully added provider', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/provider/list']);
      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  purchase: (service: RequestService, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.post('purchases', data).subscribe(data => {
      message('Successfully added purchase', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/purchase/list']);
      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  role: (service: RequestService, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.post('role-types', data).subscribe(data => {
      message('Successfully added role', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/role/list']);
      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  route: (service: RequestService, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.post('routes', data).subscribe(data => {
      message('Successfully added route', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/route/list']);
      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  sale: (service: RequestService, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.post('sales', data).subscribe(data => {
      message('Successfully added sale', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/sale/list']);
      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
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
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  truck: (service: RequestService, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.post('trucks', data).subscribe(data => {
      message('Successfully added truck', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/truck/list']);
      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  user: (service: RequestService, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.post('custom-users', data).subscribe(data => {
      message('Successfully added user', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/user/list']);
      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
}
export const FormRelationManager:any={
  carts: (formName:string,service: RequestService, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    // service.pagination$ = data
    service.post('carts', data).subscribe((data: any) => {
      message('Successfully added carts', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);

      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
    service.GetDataRelation(queryRelation[formName].query,queryRelation[formName].name,true);
  },
  credit: (service: any, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.pagination$ = data
    service.post('credits', data).subscribe((data: any) => {
      message('Successfully added credit', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);

      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  credits: (service: any, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.pagination$ = data
    service.post('credits', data).subscribe((data: any) => {
      message('Successfully added credits', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);

      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  dimension: (service: any, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.pagination$ = data
    service.post('dimensions', data).subscribe((data: any) => {
      message('Successfully added dimension', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);

      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  egress: (service: any, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.pagination$ = data
    service.post('egresses', data).subscribe((data: any) => {
      message('Successfully added egress', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);

      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  egresses: (service: any, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.pagination$ = data
    service.post('egresses', data).subscribe((data: any) => {
      message('Successfully added egresses', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);

      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  expenses: (service: any, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.pagination$ = data
    service.post('expenses', data).subscribe((data: any) => {
      message('Successfully added expenses', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);

      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  histories: (service: any, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.pagination$ = data
    service.post('histories', data).subscribe((data: any) => {
      message('Successfully added histories', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);

      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  income: (service: any, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.pagination$ = data
    service.post('incomes', data).subscribe((data: any) => {
      message('Successfully added income', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);

      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  lot: (service: any, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.pagination$ = data
    service.post('lots', data).subscribe((data: any) => {
      message('Successfully added lot', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);

      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  lots: (service: any, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.pagination$ = data
    service.post('lots', data).subscribe((data: any) => {
      message('Successfully added lots', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);

      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  payment: (service: any, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.pagination$ = data
    service.post('payments', data).subscribe((data: any) => {
      message('Successfully added payment', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);

      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  payments: (service: any, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.pagination$ = data
    service.post('payments', data).subscribe((data: any) => {
      message('Successfully added payments', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);

      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  payment_method: (service: any, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.pagination$ = data
    service.post('payment-methods', data).subscribe((data: any) => {
      message('Successfully added payment method', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);

      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  payment_methods: (service: any, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.pagination$ = data
    service.post('payment-methods', data).subscribe((data: any) => {
      message('Successfully added payment methods', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);

      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  premise: (service: any, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.pagination$ = data
    service.post('premises', data).subscribe((data: any) => {
      message('Successfully added premise', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);

      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  premises: (service: any, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.pagination$ = data
    service.post('premises', data).subscribe((data: any) => {
      message('Successfully added premises', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);

      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  products: (formName:string,service: RequestService, form: FormGroup, router: Router) => {
    let data:any = form.value;
    service.post('products', data).subscribe((data: any) => {
      // console.log(data);
      const info:any[] = service.pagination().concat(data);
      // info.push(service.pagination());
      // info.push(data);
      service.pagination.set(info);
      message('Successfully added products', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
      });
    },(error:any) => {
      console.log('error');
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
    // service.GetDataRelation(queryRelation[formName].query,queryRelation[formName].name,false);
    // service.GetDataRelation(queryRelation[formName].query,queryRelation[formName].name,true);
  },
  promotions: (service: any, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.pagination$ = data
    service.post('prmotions', data).subscribe((data: any) => {
      message('Successfully added prmotions', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);

      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  provider: (service: any, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.pagination$ = data
    service.post('providers', data).subscribe((data: any) => {
      message('Successfully added provider', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);

      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  purchases: (service: any, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.pagination$ = data
    service.post('purchases', data).subscribe((data: any) => {
      message('Successfully added purchases', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);

      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  role: (service: any, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.pagination$ = data
    service.post('role-types', data).subscribe((data: any) => {
      message('Successfully added role', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);

      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  routes: (service: any, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.pagination$ = data
    service.post('routes', data).subscribe((data: any) => {
      message('Successfully added routes', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);

      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  sale: (service: any, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.pagination$ = data
    service.post('sales', data).subscribe((data: any) => {
      message('Successfully added sale', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);

      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  sales: (service: any, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.pagination$ = data
    service.post('sales', data).subscribe((data: any) => {
      message('Successfully added sales', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);

      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  sellers: (service: any, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.pagination$ = data
    service.post('sellers', data).subscribe((data: any) => {
      message('Successfully added sellers', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);

      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  truck: (service: any, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.pagination$ = data
    service.post('trucks', data).subscribe((data: any) => {
      message('Successfully added truck', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);

      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  trucks: (service: any, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.pagination$ = data
    service.post('trucks', data).subscribe((data: any) => {
      message('Successfully added trucks', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);

      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  custom_user: (service: any, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.pagination$ = data
    service.post('custom-users', data).subscribe((data: any) => {
      message('Successfully added custom_user', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);

      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  custom_users: (service: any, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.pagination$ = data
    service.post('custom-users', data).subscribe((data: any) => {
      message('Successfully added custom_users', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);

      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  client: (service: any, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.pagination$ = data
    service.post('custom-users', data).subscribe((data: any) => {
      message('Successfully added client', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);

      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
  users: (service: any, form: FormGroup, router: Router) => {
    let data:any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    service.pagination$ = data
    service.post('custom-users', data).subscribe((data: any) => {
      message('Successfully added users', 'success');
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);

      });
    },(error:any) => {
      message(error);
      service.submit.set(false);
      service.addUpdate.set(false);
    });
  },
}

//para actualizar datos del formulario al comienzo del component
export const update: any = {
  cart:(service:RequestService, id:string, form:FormGroup,router:Router) => {
    service.get('carts/' + id).subscribe((data:any)=> {
      Object.keys(data).forEach(key =>{
        if(form.controls[key]){
          console.log(key);
          form.controls[key].setValue(data[key]);
        }
      })
      console.log(form.value);
    },(error:any) => {
      Swal.fire({
        title: "Error!",
        text: "Unable to perform the update.",
        icon: "error",
        showConfirmButton: false,
        timer:1700
      })
      setTimeout(() => {
        router.navigate(['/cart/list']);
      },2000);
    })
  }
}
export const ValidFormUpdate:any = (formName:string,id:string,service:RequestService,form:FormGroup, router:Router) => {
  // console.log(service.submit());
  service.submit.set(true);
  if(form.invalid){
    return message('Form is invalid','error');
  }
  service.addUpdate.set(true);
  alert('update')
  return updateForm[formName](service,id,form,router);
}
//funciones para actualiza los datos del campo en la base de datos
export const updateForm:any = {
  cart:(service:RequestService, id:string, form:FormGroup,router:Router) => {
    let data: any = form.value;
    data = Object.fromEntries(
      Object.entries(data).filter(([key, value]) =>
        value !== undefined &&
        value !== null &&
        !(Array.isArray(value) && value.length === 0) &&
        !(typeof value === 'object' && Object.keys(value).length === 0) &&
        value !== ""
      )
    );
    console.log('data', data);
    service.put('carts/' + id, data).subscribe((data:any)=> {
      Swal.fire({
        title: "Success!",
        text: "Successfully updated the cart.",
        icon: "success",
        showConfirmButton: false,
        timer:1700
      })
      setTimeout(() => {
        service.submit.set(false);
        service.addUpdate.set(false);
        router.navigate(['/cart/list']);
      },2000);
    },(error:any) => {
      Swal.fire({
        title: "Error!",
        text: "Unable to perform the update.",
        icon: "error",
        showConfirmButton: false,
        timer:1700
      })
      setTimeout(() => {
        router.navigate(['/cart/list']);
      },2000);
    })
  }
}
