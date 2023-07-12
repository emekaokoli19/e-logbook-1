import { Routes } from "@angular/router";
import {AuthModule} from "../auth/auth.module";
import {HomeModule} from "../home/home.module";

const routes: Routes = [
    {
        path: 'auth-modules',
        loadChildren: () => import('../auth/auth.module').then(module => module.AuthModule),
        redirectTo: '',
    },
    {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(module => module.HomeModule),
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
]

export {routes}