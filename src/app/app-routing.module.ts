import { NgModule } from "@angular/core";
import {Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./views/auth/register/register.component";

const routes: Routes = [
    {
        /* this can be imported from the auth routing module*/
        path: 'auth',
        loadChildren: () => import('./views/auth/auth.module').then(module => module.AuthModule),
        loadComponent: () => RegisterComponent
        // redirectTo: 'auth',
        // pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('./views/home/home.module').then(module => module.HomeModule),
    },
    /* default route ===== */
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
    }
]

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouter { }