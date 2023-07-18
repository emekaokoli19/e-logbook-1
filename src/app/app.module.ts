import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

// import { AuthModule } from './views/auth/auth.module';
import { AppRouter } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
// import { Error404Component } from './shared/components/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    // Error404Component, 
  ],

  imports: [
    BrowserModule,
    CommonModule,
    AppRouter,
  ],

  providers: [
    /* services come in here - fix how they come into this modules */
  ],
  
  bootstrap: [
    /* fix what gets bootstrapped on App initial and continuous load */
    AppComponent
  ], 

  exports: [AppComponent]
})
export class AppModule { }
