import { NgModule } from "@angular/core";
import {Routes, RouterModule } from "@angular/router";
import { Error404Component } from "./shared/components/error404/error404.component";

const routes: Routes = [

    /* Routing with the use of module ===== */
    {
        /* default route */
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full',
    },
    {
        /* this can be imported from the auth routing module*/
        path: 'auth',
        loadChildren: () => import('./views/auth/auth.module').then(module => module.AuthModule),
    },
    {
        path: 'home',
        loadChildren: () => import('./views/home/home.module').then(module => module.HomeModule),
    },
    /* ====== Routing with the use of module */
    
    {
        path: '**', component: Error404Component
    }

]

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouter {
}