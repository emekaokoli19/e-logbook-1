export class ShowHidePassword {

    /* parameters */
    inputType: string = 'password'
    isInputTypeText: boolean = false
    eyeIcon: string = 'assets/images/svg/show-password.svg'

    /* methods */
    hideShowPassword() {
        this.isInputTypeText = !this.isInputTypeText
        this.isInputTypeText ? this.eyeIcon = 'assets/images/svg/show-password.svg' : 'assets/images/svg/hide-password.svg'
        this.isInputTypeText ? this.inputType = "text" : this.inputType = "password"
    }
}
