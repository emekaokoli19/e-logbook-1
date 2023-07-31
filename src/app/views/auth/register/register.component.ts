import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Validate } from "src/app/shared/helpers/validators";
// import { AuthService } from "../services/auth.service";
// import { register } from "src/app/interfaces/auth-interface";

@Component({
    templateUrl: './register.component.html',
})

export class RegisterComponent implements OnInit{

    /* show password, hide password */
    inputType: string = "text"
    isInputTypeText: boolean = true
    eyeIcon: string = "assets/images/svg/show-password.svg"

    /* agree.disagree with Terms and Condition */
    agree!: boolean
    tickIcon: string = "assets/images/svg/tick-icon.svg"
    tickImageClass = "display-hidden"

    registerForm!: FormGroup

    constructor(private registerFormBuilder: FormBuilder) { }

    /* create form on initialization */
    ngOnInit(): void {
        this.registerForm = this.registerFormBuilder.group({
            fullName: ['', Validate.fullNameValidator],
            email: ['', Validate.emailValidator],
            password: ['', Validate.passwordValidator],
            isAgree: [this]
        })
    }

    hideShowPassword() {
        this.isInputTypeText = !this.isInputTypeText
        this.isInputTypeText ? this.eyeIcon = "assets/images/svg/show-password.svg" : "assets/images/svg/hide-password.svg"
        this.isInputTypeText ? this.inputType = "text" : this.inputType = "password"
    }

    toggleAgreement() {
        this.agree = !this.agree
        this.agree ? this.tickIcon = "assets/images/svg/tick-image.svg" : null
        this.agree ? this.tickImageClass = "display-hidden" : this.tickImageClass = "display-visible"
    }

    onRegisterUser(): void {
        console.log(this.registerForm.value)
        /* Validate, if no error authenticate user */

    }
}
