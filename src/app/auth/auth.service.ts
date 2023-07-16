/* Here contains the list of all auth actions
  for our forms across all pages
*/

import { Injectable } from '@angular/core';
import { login, register, forgotPassword } from '../interfaces/auth-interface';

@Injectable({
  providedIn: "root",
})
export class AuthService {

  constructor() { }

  registerUser({fullName, email, password}:register) {
    /* auth action ======= */
    console.log(`New User Signed In with fullname: ${fullName}, and email address: ${email}, password cannot be disclosed ${password.slice(4)}`)
  }
  
  loginUser({}: login) {
    /* auth action ======= */
  }

  sendPasswordResetLink({}: forgotPassword) {
    /* auth action ======= */
  }

  ngOnit() {
    /* Do this when the page loads ====== */
  }
}
