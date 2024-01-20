import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from '../../nav.component';
const routes: Routes = [
  {
    path:'',
    component: NavComponent,
    children:[
      {path:'',
      // canActivate:[roleGuard],
      data:{allRoles:['Administrator','Client','Delivery man','Inventorist','Manager','Sales','Secretary','User']},
      component:HomeComponent},
      {path:'**', redirectTo:''}
    ]
  }
]


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
