import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    Dashboard
  ],
  imports: [
    CommonModule,
  ],
  exports: [Dashboard]
})
export class HomeModule { }
