export interface Nav {
  routerLink:string,
  label:string,
  roles: Array<'Administrator' | 'Client' | 'Delivery man' | 'Inventorist' | 'Manager' | 'Sales' | 'Secretary' | 'User'>
}
