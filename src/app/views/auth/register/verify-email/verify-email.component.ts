import {Component, Input} from "@angular/core";

@Component({
    templateUrl: './verify-email.component.html',
})

export class VerifyEmailComponent {

    resendVerificationLink() {
        console.log("Verification Link Sent")
    }
}
