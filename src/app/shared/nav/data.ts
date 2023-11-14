import { NavData } from "src/app/interfaces/navData";

const roles:Array<string> = ['Administrator','Client','Delivery man','Inventorist','Manager','Sales','Secretary','User'];
export const nav:NavData[] = [
  {
    routerLink:'/product/list',
    label:'Products',
    icon:'label',
    roles
  },
  {
    routerLink:'/egress/list',
    label:'Egress',
    icon:'label',
    roles
  },
  {
    routerLink:'/income/list',
    label:'Income',
    icon:'label',
    roles
  }
]

