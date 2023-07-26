import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRouter, routingComponents } from './auth-routing.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';

@NgModule({
  declarations: [
    /* from auth-routing.module.ts ===== */
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent, 
    UpdatePasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRouter,

    /* Immutable forms module ====== */
    
    ReactiveFormsModule
    
    /* This module should be imported to the exact module that's using it and not the root module: app.module.ts */
  ]
})
export class AuthModule { }