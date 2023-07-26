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
}
