import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardRouter} from './dashboard-routing.module';
import {DashboardComponent} from "./dashboard.component";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRouter
  ],
})

export class DashboardModule { }
