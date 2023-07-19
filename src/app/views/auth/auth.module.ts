import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RegisterComponent } from './register/register.component';
// import { LoginComponent } from './login/login.component';
// import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
// import {ResetPasass`wordComponent } from './reset-password/reset-password.component';
import { AuthService } from './auth.service';
import { FormService } from 'src/app/services/form.service';
import { AuthRouter } from './auth-routing.module';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRouter
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
