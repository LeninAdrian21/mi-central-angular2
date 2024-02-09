import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NewPasswordComponent } from './new-password/new-password.component';
const routes: Routes = [
  { path: 'loggin', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'reset-password', component: ResetPasswordComponent},
  { path: 'new-password/:token', component: NewPasswordComponent},
  { path: '**', redirectTo: 'loggin' },
];
@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ResetPasswordComponent,
    NewPasswordComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class AuthModule { }
