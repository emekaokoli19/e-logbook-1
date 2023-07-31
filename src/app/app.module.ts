import { BrowserModule } from '@angular/platform-browser';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRouter } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],

    imports: [
        BrowserModule,
        CommonModule,
        AppRouter,
        NgOptimizedImage,
    ],

  bootstrap: [
    AppComponent
  ],

  exports: [AppComponent]
})
export class AppModule { }
