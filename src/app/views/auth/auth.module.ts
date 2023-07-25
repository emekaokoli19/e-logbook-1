import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRouter, routingComponents } from './auth-routing.module';

@NgModule({
  declarations: [
    /* from auth-routing.module.ts ===== */
    routingComponents,
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