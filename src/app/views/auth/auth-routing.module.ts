import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResendEmailComponent } from './forgot-password/resend-email/resend-email.component';
import { RegisterComponent } from './register/register.component';
import { VerifyEmailComponent } from './register/verify-email/verify-email.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { VerifyEmailSuccess } from './register/verify-email/verify-email-success/verify-email-success.component';


/* Routing with Module and Lazy-Loading ===== */
const routes: Routes = [
  {
    path: '', // if the user enters auth in url bar
    redirectTo: '/login',
    pathMatch: 'full'
  },
  // Auth Process
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

      // After Auth Process
      {
        path: 'verify-email',
        component: VerifyEmailComponent
        /* Path for when the user has signs up for verification */
      },
      {
        path: 'resend-email',
        component: ResendEmailComponent
        /* Path for after the user clicks the send button on the forgot password page */
      },
      {
        path: 'verify-success',
        component: VerifyEmailSuccess
        /* Path for after user's verification has been confirmed */
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRouter { }

export const routingComponents = [
  // for the process pages
  RegisterComponent,
  LoginComponent,
  ForgotPasswordComponent,
  UpdatePasswordComponent,

  // for the result pages
  VerifyEmailComponent,
  VerifyEmailSuccess,
  ResendEmailComponent,
]
