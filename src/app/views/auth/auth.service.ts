/* Here contains the list of all auth actions
  for our forms across all pages
*/

import { Injectable } from '@angular/core';
import { login, register, forgotPassword } from '../../interfaces/auth-interface';

@Injectable({
  providedIn: "root",
})
export class AuthService {

  constructor() { }

  registerUser({fullName, email, password}:register) {
    /* auth action: navigate the user to the dashboard  ======= */
  }
  
  loginUser({}: login) {
    /* auth action: check if user exists and navigate the User to the dashboard (use firebase for now) ======= */
  }

  sendPasswordResetLink({}: forgotPassword) {
    /* auth action ======= */
  }
}
