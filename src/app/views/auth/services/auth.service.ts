  /* Here contains the list of all auth actions
  for our forms across all pages
*/

import { Injectable } from '@angular/core';
import { login, register, forgotPassword, email} from '../../../interfaces/auth-interface';
import {Validate} from "../../../shared/helpers/validators";
// import {Router} from "@angular/router";

  @Injectable({
    providedIn: 'root',
  })
  export class AuthService {

    constructor(private validateFormInput: Validate) { }

    /* for navigating user after authentication */
    // reRouter!: Router

    registerUser({ fullName, email, password}: register) {
      /* auth action: navigate the user to the dashboard after verification ======= */

      /* Backend API */

      this.sendVerificationLink(email)
    }

    loginUser(form: any) {
      /* auth action: check if user exists and navigate the User to the dashboard======= */

        // this.reRouter.navigate(['/auth/login'])

      console.log(form.control.value)
      /* Use the auth routing service to navigate to the dashboard after backend has been checked if the user exists */
    }

    sendPasswordResetLink({email}: forgotPassword) {
      /* auth action - Send reset link to email address registered ======= */

      /* Backend API */

      console.log(`Password reset link has been sent to your email address: ${email}`)
    }

    sendVerificationLink(email: email) {
      /* auth action - Send verification link to email address registered ======= */

      /* Backend API */
    }

    resendVerificationLink(email: email) {
      /* auth action - resend verification link to email address registered */

      /* Backend API */

      let sessionUserEmail = email // this was the email that was registered on signup would be stored and it can change after each session has been concluded

      this.sendVerificationLink(sessionUserEmail)
      /* In order for the email not to be retyped again */
    }
  }
