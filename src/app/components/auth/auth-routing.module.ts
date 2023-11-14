import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LogginComponent } from './loggin/loggin.component';
import { RegisterComponent } from './register/register.component';
const routes:Routes = [
  {path:'loggin',component: LogginComponent},
  {path:'register',component: RegisterComponent},
  { path: '**', redirectTo: 'loggin' },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule,
  ]
})
export class AuthRoutingModule { }
