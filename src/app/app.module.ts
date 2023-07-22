import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRouter } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    AppComponent
  ],
  
  imports: [
    BrowserModule,
    CommonModule,
    AppRouter
  ],

  // providers: [
  //   /* services come in here ====*/
  // ],
  
  bootstrap: [
    AppComponent
  ], 

  exports: [AppComponent]
})
export class AppModule { }
