import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './modules/nav/nav.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { environment } from 'environment';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    ReactiveFormsModule,
    RecaptchaV3Module,
    MaterialModule,
    BrowserAnimationsModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [{
    provide: RECAPTCHA_V3_SITE_KEY,
    useValue: "6Ld5Mv4oAAAAAKu35qemZsvEpZj9IIJwarJ7lKV1",
  }],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
