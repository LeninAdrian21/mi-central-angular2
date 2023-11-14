import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogginComponent } from './loggin/loggin.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { InterfaceModule } from 'src/app/interface/interface.module';




@NgModule({
  declarations: [
    LogginComponent,
    RegisterComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    MaterialModule,
    InterfaceModule,
  ]
})
export class AuthModule { }
