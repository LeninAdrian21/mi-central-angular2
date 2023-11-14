import { roleGuard } from './../../guards/role.guard';
import { NavComponent } from "src/app/components/nav/nav.component"



export const data = (list:any,form:any) => {
  return [
    {
      path:'',
      component: NavComponent,
      children:[
        {
          path:'list',
          canActivate:[roleGuard],
          data:{allRoles:['Administrator','Client','Delivery man','Inventorist','Manager','Sales','Secretary','User']},
          component:list
        },
        {
          path:'form',
          canActivate:[roleGuard],
          data:{allRoles:['Administrator']},
          component:form
        },
        {
          path:'form/:id',
          canActivate:[roleGuard],
          data:{allRoles: ['Administrator']},
          component:form
        },
        {path:'**', redirectTo:'list'}
      ]
      // ['Administrator','Client','Delivery man','Inventorist','Manager','Sales','Secretary','User']
    }
  ]
}
