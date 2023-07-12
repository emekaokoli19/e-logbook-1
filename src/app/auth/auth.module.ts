import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthService } from './auth.service';
import { FormService } from '../services/form.service';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    // AuthService,
    // FormService,
    {provide: AuthService, useValue: AuthService},
    {provide: FormService, useValue: FormService}
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
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
