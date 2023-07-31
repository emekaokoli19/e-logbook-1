import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: false,
  templateUrl: './forgot-password.component.html',
  providers: [
    /* services and injectables ====== */
  ]
})

export class ForgotPasswordComponent {
  /* Forgot Password Form ===== */
  forgotPasswordForm = new FormGroup({
    email: new FormControl('')
  })

  /* When user clicks submit button */
  onSubmit(): void {
    /* send the password reset link with forgot password service to the email typed in*/

  }
}
