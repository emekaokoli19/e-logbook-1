/* Not making use of App Component, but App Module ========= */

import { NgModule } from '@angular/core';
import { AppModule } from './app/app.module';
import {
  platformBrowser, 
  // bootstrapApplication, 
  // provideProtractorTestingSupport
} from "@angular/platform-browser"; 
// import { provideRouter } from '@angular/router';
// import { AppComponent } from './app/app.component';
// import { routeConfig } from './app/routes/routes';

platformBrowser().bootstrapModule(AppModule)
  .catch((err: any) => console.error(err));

// @NgModule({
  // retract and come back
// })

// bootstrapApplication(AppComponent, 
//   {
//     providers: [
//       provideProtractorTestingSupport(),
//       provideRouter(routeConfig)
//     ]
//   }
// ).catch(err => console.error(err))
