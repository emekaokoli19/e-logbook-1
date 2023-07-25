import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';
import {platformBrowser} from "@angular/platform-browser"; 

/* HMR - HOT MODULE RELOADING */

platformBrowser().bootstrapModule(AppModule)
  .catch((err: any) => console.error(err));

/* Find out more about production and development environment */