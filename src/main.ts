/* Not making use of App Module, but App Component ========= */

import { AppModule } from './app/app.module';
import {platformBrowser} from "@angular/platform-browser"; 

/* The difference between an App Module and App Component is that: 
  The App Module contains components, directives and pipes

  While the App Component Contains the template and the code for the template
*/

platformBrowser().bootstrapModule(AppModule)
  .catch((err: any) => console.error(err));


// bootstrapApplication(AppComponent, 
//   {
//     providers: [
//       provideProtractorTestingSupport(),
//       provideRouter(routeConfig)
//     ]
//   }
// ).catch(err => console.error(err))