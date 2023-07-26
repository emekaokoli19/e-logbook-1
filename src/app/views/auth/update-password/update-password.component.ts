import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  providers: [
    /* services and injectables ====== */
  ]
})
export class UpdatePasswordComponent {
  /* Change the user's password ===== */
  resetPasswordForm = new FormGroup({
    newPassword: new FormControl(''),
    confirmNewPassword: new FormControl('')
  })
}
