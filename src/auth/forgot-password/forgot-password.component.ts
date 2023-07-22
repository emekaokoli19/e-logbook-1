import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  standalone: false,
  templateUrl: './forgot-password.component.html',
  providers: [
    /* services and injectables ====== */
    AuthService
  ]
})

export class ForgotPasswordComponent {
  /* Forgot Password Form ===== */
  forgotPasswordForm = new FormGroup({
    email: new FormControl('')
  })
}
