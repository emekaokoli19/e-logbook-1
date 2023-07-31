import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Validate } from "src/app/shared/helpers/validators";
import {FormService} from "../../../shared/services/form.service";
// import { AuthService } from "../services/auth.service";
// import { register } from "src/app/interfaces/auth-interface";

@Component({
    templateUrl: './register.component.html',
})

export class RegisterComponent implements OnInit{
    registerForm!: FormGroup

    constructor(private registerFormBuilder: FormBuilder, private formService: FormService) { }

    /* create form on initialization */
    ngOnInit(): void {
        this.registerForm = this.registerFormBuilder.group({
            fullName: ['', Validate.fullNameValidator],
            email: ['', Validate.emailValidator],
            password: ['', Validate.passwordValidator],
            isAgree: [this]
        })
    }

    /* logic for showing and hiding password as a service */
    inputType = this.formService.inputType
    eyeIcon = this.formService.eyeIcon
    iconIsVisibleMethod = this.formService.hideShowPassword

    /* logic for showing tick icon in agreement to T&C in checkbox */
    tickIcon = this.formService.tickIcon
    tickIconImageClass = this.formService.tickImageClass
    toggleAgreement = this.formService.toggleAgreement

    onRegisterUser(): void {
        console.log(this.registerForm.value)
        /* Validate, if no error authenticate user */
    }
}
