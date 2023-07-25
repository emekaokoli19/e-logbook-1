import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';

/* Routing with Module and Lazy-Loading ===== */
const routes: Routes = [
  {
    path: '', 
    children: [
      {
        path: 'login', 
        component: LoginComponent
      },
      {
        path: 'register', 
        component: RegisterComponent
      },
      {
        path: 'forgot-password', 
        component: ForgotPasswordComponent
      },
      {
        path: 'update-password', 
        component: UpdatePasswordComponent
      },
    ]
  },
  {
    path: '', // if the user enters auth in url bar
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRouter { }

export const routingComponents = [
  RegisterComponent,
  LoginComponent,
  ForgotPasswordComponent,
  UpdatePasswordComponent,
]
