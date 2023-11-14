import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { RouterModule, Routes } from '@angular/router';
import { roleGuard } from 'src/app/guards/role.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component: NavComponent,
    children:[
      {path:'',
      canActivate:[roleGuard],
      data:{allRoles:['Administrator','Client','Delivery man','Inventorist','Manager','Sales','Secretary','User']},
      component:HomeComponent},
      {path:'**', redirectTo:''}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports :[RouterModule]
})
export class HomeRoutingModule { }
