import {Component, Input} from "@angular/core";

@Component({
    templateUrl: './verify-email.component.html',
    providers: []
})

export class VerifyEmailComponent {

    @Input() emailImage: string =  'assets/images/svg/email-image.svg'

    demoEmail: object = {
        address: "gbemiga@gmail.com",
        style: "font-weight: bold"
    }

    resendVerificationLink() {
        console.log("Verification Link Sent")
    }
}
