import { NgModule } from "@angular/core";
import {Routes, RouterModule } from "@angular/router";
import { Error404Component } from "./shared/error404/error404.component";
import { RegisterComponent } from "./views/auth/register/register.component";
import { ForgotPasswordComponent } from "./views/auth/forgot-password/forgot-password.component";
import { UpdatePasswordComponent } from "./views/auth/update-password/update-password.component";
import { LoginComponent } from "./views/auth/login/login.component";

const routes: Routes = [
    {
        path: 'auth/register',
        component: RegisterComponent,
        children: [
            {
                path: 'register',
                component: RegisterComponent,
            },
            {
                path: 'login',
                component: LoginComponent,
            },
            {
                path: 'forgot-password',
                component: ForgotPasswordComponent,
            },
            {
                path: 'update-password',
                component: UpdatePasswordComponent
            },
        
        ]
    },
    /* Routing with the use of module ===== */
    {
        /* this can be imported from the auth routing module*/
        path: 'disable-1',
        loadChildren: () => import('./views/auth/auth.module').then(module => module.AuthModule),
    },
    {
        path: 'disable-2',
        loadChildren: () => import('./views/home/home.module').then(module => module.HomeModule),
    },
    /* ====== Routing with the use of module */

    {
        path: '',
        redirectTo: '/register',
        pathMatch: 'full',
    },
    {
        path: '**', component: Error404Component
    }
]

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouter { }