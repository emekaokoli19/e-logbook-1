import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard } from './dashboard/dashboard.component';
import { HomeRouter } from './home-routing.module';

@NgModule({
  declarations: [
    Dashboard
  ],

  imports: [
    CommonModule,
        HomeRouter
  ],
  
  exports: [Dashboard]
})

export class HomeModule { }
