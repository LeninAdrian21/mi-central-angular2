import { Nav } from "../interface/nav";

const roles:Array<'Administrator' | 'Client' | 'Delivery man' | 'Inventorist' | 'Manager' | 'Sales' | 'Secretary' | 'User'> = ['Administrator', 'Client','Delivery man','Inventorist','Manager','Sales','Secretary','User'];
export const nav:Nav[]=[
  {
    routerLink:'/cart/list',
    label:'Cart',
    roles
  },
  {
    routerLink:'/credit/list',
    label:'Credit',
    roles
  },
  {
    routerLink:'/dimension/list',
    label:'Dimension',
    roles
  },
  {
    routerLink:'/egress/list',
    label:'Egress',
    roles
  },
  {
    routerLink:'/expense/list',
    label:'Expense',
    roles
  },
  {
    routerLink:'/history/list',
    label:'History',
    roles
  },
  {
    routerLink:'/income/list',
    label:'Income',
    roles
  },
  {
    routerLink:'/lot/list',
    label:'Lot',
    roles
  },
  {
    routerLink:'/payment/list',
    label:'Payment',
    roles
  },
  {
    routerLink:'/payment-method/list',
    label:'Payment method',
    roles
  },
  {
    routerLink:'/premise/list',
    label:'Premise',
    roles
  },
  {
    routerLink:'/product/list',
    label:'Product',
    roles
  },
  {
    routerLink:'/promotion/list',
    label:'Promotion',
    roles
  },
  {
    routerLink:'/provider/list',
    label:'Provider',
    roles
  },
  {
    routerLink:'/purchase/list',
    label:'Purchase',
    roles
  },
  {
    routerLink:'/role/list',
    label:'Role',
    roles
  },
  {
    routerLink:'/route/list',
    label:'Route',
    roles
  },
  {
    routerLink:'/sale/list',
    label:'Sale',
    roles
  },
  {
    routerLink:'/seller/list',
    label:'Seller',
    roles
  },
  {
    routerLink:'/truck/list',
    label:'Truck',
    roles
  },
  {
    routerLink:'/user/list',
    label:'User',
    roles
  },
]
