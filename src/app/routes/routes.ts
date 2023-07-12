import { Routes } from "@angular/router";
import { Dashboard } from "../home/dashboard/dashboard.component";

const routeConfig: Routes = [
    {
        path: 'auth-modules',
        loadChildren: () => import('../auth/auth.module').then(module => module.AuthModule),
        redirectTo: '',
    },
    {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(module => module.HomeModule),
    }
    // {
    //     path: '/',
    //     component: RegisterComponent,
    //     title: 'Sign Up',
    // },
    // {
    //     path: 'login',
    //     component: LoginComponent,
    //     title: 'Login',
    // },
    // {
    //     path: 'forgot-password',
    //     component: ForgotPasswordComponent,
    //     title: 'Forgot Password',
    // },
    // {
    //     path: 'change-password',
    //     component: ResetPasswordComponent,
    //     title: 'Reset Password',
    // },
    // {
    //     path: 'dashboard',
    //     component: Dashboard,
    //     title: 'Dashboard',
    // },
    // {
    //     path: '404error',
    //     // component: PageNotFound,
    // },
]

/* PROJECT STRUCTURE
    -APP  
        -- AUTH (process and pages)
            --- SIGNUP (register)
            --- VERIFY SIGNUP
            --- CONFIRM RESENT SIGNUP VERIFICATION LINK
            --- SIGNUP SUCCESSFUL -- UNTO DASHBOARD
            
            --- LOGIN
            
            --- FORGOT PASSWORD
            --- RESET LINK SENT (and resent button)

            --- RESET PASSWORD
            --- PASSWORD RESET SUCCESSFULLY -- UNTO LOGIN

        -- HOME
            ---DASHBOARD
                ---- 
*/

export {routeConfig};