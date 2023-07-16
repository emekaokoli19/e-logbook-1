import { NgModule } from "@angular/core";
import {Routes, RouterModule } from "@angular/router";
import {Route} from "@angular/router";
import { RegisterComponent } from "./auth/register/register.component";
import { ResetPasswordComponent } from "./auth/reset-password/reset-password.component";
import { ForgotPasswordComponent } from "./auth/forgot-password/forgot-password.component";
import { LoginComponent } from "./auth/login/login.component";
import { Dashboard } from "./home/dashboard/dashboard.component";

const routes: Routes = [
    {
        /* this can be imported from the auth routing module --- needs fixing */
        path: 'auth-module',
        loadChildren: () => import('./auth/auth-routing.module').then(module => module.AuthRouter),
        redirectTo: '',
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(module => module.HomeModule),
        loadComponent: () => Dashboard /* The Dashboard from the Home Module */
    },
    {
        path: 'login',
        loadChildren: () => import('./auth/login/login.component').then(component => component.LoginComponent),
        loadComponent: () => LoginComponent,
        outlet: 'login',
    },
    {
        path: 'forgot-password',
        loadChildren: () => import('./auth/forgot-password/forgot-password.component').then(component => component.ForgotPasswordComponent),
        loadComponent: () => ForgotPasswordComponent,
        outlet: 'forgot-password',
    },
    {
        path: 'reset-password',
        loadChildren: () => import('./auth/reset-password/reset-password.component').then(component => component.ResetPasswordComponent),
        loadComponent: () => ResetPasswordComponent,
        outlet: 'reset-password',
    },
    {
        /* default route on load */
        path: '',
        redirectTo: '',
        pathMatch: 'prefix',
        loadComponent: () => RegisterComponent,
        outlet: 'base',
    },
    // {
    //     path: 'signup',
    //     loadChildren: () => import('./auth/register/register.component').then(component => component.RegisterComponent),
    //     outlet: 'base'
    // },
]

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouter { }