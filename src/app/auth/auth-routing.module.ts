import { NgModule } from "@angular/core";
import { 
    Routes, 
    RouterModule 
} from '@angular/router';
// import {RouterModule} from "../app-router.module"

const routes: Routes = []

/* This module will be loaded with its children from the auth module by the appRouter (app routing module) 
*/

@NgModule ({
    // imports: [RouterModule],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
        // Router /* The router is already a service */
    ]
})

export class AuthRouter { }