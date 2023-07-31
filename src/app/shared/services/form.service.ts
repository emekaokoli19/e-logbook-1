import {Injectable} from "@angular/core";

/* Make use of the auth service after form has been validated */
@Injectable({
    providedIn: 'root'
})
export class FormService {

    /* SHOW AND HIDE PASSWORD FIELD ===== */
    /* parameters */
    inputType: string = 'password'
    isInputTypeText: boolean = false
    eyeIcon: string = 'assets/images/svg/show-password.svg'

    /* methods */
    hideShowPassword(): void {
        this.isInputTypeText = !this.isInputTypeText
        this.isInputTypeText ? this.eyeIcon = 'assets/images/svg/show-password.svg' : 'assets/images/svg/hide-password.svg'
        this.isInputTypeText ? this.inputType = "text" : this.inputType = "password"
    }

    /* AGREE AND DISAGREE TO TERMS AND CONDITION CHECKBOX ======= */
    /* agree.disagree with Terms and Condition */
    agree!: boolean
    tickIcon: string = "assets/images/svg/tick-icon.svg"
    tickImageClass = "display-hidden"

    toggleAgreement(): void {
        this.agree = !this.agree
        this.agree ? this.tickIcon = "assets/images/svg/tick-image.svg" : null
        this.agree ? this.tickImageClass = "display-hidden" : this.tickImageClass = "display-visible"
    }
}
