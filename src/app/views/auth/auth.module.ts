import { NgModule, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRouter, routingComponents } from './auth-routing.module';
import {AuthService} from "./services/auth.service";

@NgModule({
  declarations: [
    /* from auth-routing.module.ts ===== */
    routingComponents,
  ],
  imports: [
    CommonModule,
    AuthRouter,
    NgOptimizedImage,
    /* Immutable forms module ====== */

    ReactiveFormsModule

    /* This module should be imported to the exact module that's using it and not the root module: app.module.ts */
  ],

  providers: [
    AuthService,
  ]
})
export class AuthModule {
  // @Input() emailImage: string =  'assets/images/svg/email-image.svg'
}
