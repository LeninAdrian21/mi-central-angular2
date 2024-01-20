import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
const routes: Routes = [
  { path: 'loggin', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  // { path: 'forgot-password', component: ForgotPasswordComponent},

  { path: '**', redirectTo: 'loggin' },
];
@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class AuthModule { }
