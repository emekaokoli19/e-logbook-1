import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthService } from './auth.service';
import { FormService } from '../services/form.service';
import { AppRouter } from '../app-routing.module';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [
    CommonModule,
    AppRouter // enable routing in this component's module
  ],
  providers: [
    // AuthService, fix how services come into this module
    // FormService,
    {provide: AuthService, useValue: AuthService},
    {provide: FormService, useValue: FormService},
  ],
  exports: [
    AuthComponent
  ],
  bootstrap: [
    AuthComponent
  ]
})
export class AuthModule { 
  authService: AuthService;
  formService: FormService;

  constructor(authService: AuthService, formService: FormService) {
    this.authService = authService;
    this.formService = formService;
  }
}
