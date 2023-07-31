import { FormControl, FormGroup, Validators } from "@angular/forms"
import {AuthService} from "../../views/auth/services/auth.service";


export class Validate {

    constructor(private authUser: AuthService) { }

    static fullNameValidator = [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(18)
    ]

    static emailValidator = [
        Validators.pattern(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/g),
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15)
    ]

    static passwordValidator = [
        Validators.minLength(8),
        Validators.maxLength(30),
    ]

    // passwordMatchValidator(form: FormGroup, passwordField: FormControl, confirmPasswordField: FormControl) {
    //     // return form.get(passwordField).value === form.get(confirmPasswordField).value
    //     //     return form.controls
    //         ? null
    //         : {'mismatch': true};
    // }

    static validateAllFormInputs(form: FormGroup) {
        Object.keys(form.controls).forEach(control => {
            const formControl = control

            /* Validate each form control */
            if (form instanceof FormControl) {

            }
            else if (form instanceof FormGroup) {
                form.markAsDirty({
                    onlySelf: true
                })
            }
        })
    }
}
