import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import {HomeModule} from "./home/home.module";

const routes: Routes = [
    {
        path: 'auth-module',
        loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule),
        redirectTo: '',
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(module => module.HomeModule),
    },
    {
        path: 'signup',
        loadChildren: () => import('./auth/register/register.component').then(component => component.RegisterComponent)
    },
    {
        path: 'login',
        loadChildren: () => import('./auth/login/login.component').then(component => component.LoginComponent)
    },
    {
        path: 'forgot-password',
        loadChildren: () => import('./auth/forgot-password/forgot-password.component').then(component => component.ForgotPasswordComponent)
    },
    {
        path: 'reset-password',
        loadChildren: () => import('./auth/reset-password/reset-password.component').then(component => component.ResetPasswordComponent)
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
]

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouter { }