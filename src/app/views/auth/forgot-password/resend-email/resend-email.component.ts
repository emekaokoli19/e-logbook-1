import { Component } from '@angular/core';

type emailStatusType = 'Email Sent' | 'Email Resent'
@Component({
  selector: 'app-email-resent',
  templateUrl: './resend-email.component.html'
})


export class ResendEmailComponent {
  emailStatus!: emailStatusType

  resendPasswordResetLink() {
    console.log("Password reset link sent")
  }
}
