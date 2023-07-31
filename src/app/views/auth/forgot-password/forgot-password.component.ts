import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './forgot-password.component.html',
})

export class ForgotPasswordComponent {
  /* Forgot Password Form ===== */
  forgotPasswordForm = new FormGroup({
    email: new FormControl('')
  })

  /* When user clicks submit button */
  onSubmit(): void {
  }
}
