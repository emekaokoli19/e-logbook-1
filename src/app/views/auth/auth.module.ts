import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRouter, routingComponents } from './auth-routing.module';


@NgModule({
  declarations: [
    /* from authRoutingModule ===== */
    routingComponents,
  ],
  imports: [
    CommonModule,
    AuthRouter,
  ]
})
export class AuthModule { }
