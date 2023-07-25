import { NgModule } from "@angular/core";
import { 
    Routes, 
    RouterModule 
} from '@angular/router';
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";

// Lazy loaded from the App Routing Module
const authRoutes: Routes = [
    {
        path: 'auth',
        component: RegisterComponent,

        children: [
            {
                path: '',
                component: RegisterComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'forgot-password',
                component: ForgotPasswordComponent
            },
            {
                path: 'reset-password',
                component: ResetPasswordComponent
            },
            {
                // path: '**',
                // component: ErrorPageComponent
            },
        ]
    },
]

/* This module will be loaded with its children from the auth module by the appRouter (app routing module) 
*/

@NgModule ({
    // imports: [RouterModule],
    imports: [RouterModule.forChild(authRoutes)],
    providers: [
        // Router /* The router is already a service */
    ]
})

export class AuthRouter { }