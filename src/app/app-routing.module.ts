import { NgModule } from "@angular/core";
import {Routes, RouterModule } from "@angular/router";
import { Error404Component } from "./shared/components/error404/error404.component";
import { ForgotPasswordComponent } from "./views/auth/forgot-password/forgot-password.component";
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";
import { UpdatePasswordComponent } from "./views/auth/update-password/update-password.component";
import { Dashboard } from "./views/home/dashboard/dashboard.component";

const routes: Routes = [

    /* Routing with the use of module ===== */
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full',
    },
    // {
    //     /* this can be imported from the auth routing module*/
    //     path: 'auth',
    //     loadChildren: () => import('./views/auth/auth-routing.module').then(module => module.AuthRouter),
    // },
    // {
    //     path: 'home',
    //     loadChildren: () => import('./views/home/home-routing.module').then(module => module.HomeRouter),
    // },
    /* ====== Routing with the use of module */
    
    // {
    //     path: '**', component: Error404Component
    // }


    /* Routing without the use of module but components ======*/
    {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full',
    },
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: LoginComponent,
                title: 'Login'
            },
            {
                path: 'register',
                component: RegisterComponent,
                title: 'Sign Up'
            },
            {
                path: 'forgot-password',
                component: ForgotPasswordComponent,
                title: 'Forgot Password'
            },
            {
                path: 'update-password',
                component: UpdatePasswordComponent,
                title: 'Change Password'
            },
        
        ]
    }, /* Set page title per routes ===== */

    {
        path: 'home',
        children: [
            {
                path: 'dashboard',
                component: Dashboard,
                children: [
                    /* In here contains the list of all routed components in on the dashboard */
                ]
            }
        ]
    },

    {
        path: '**', component: Error404Component
    }
    /* ====== Routing without the use of module but components */

]

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouter {
}