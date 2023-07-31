import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Validate} from "../../../shared/helpers/validators";

@Component({
    templateUrl: './update-password.component.html',
})

export class UpdatePasswordComponent implements OnInit{

  updatePasswordForm!: FormGroup

  constructor(private updatePasswordFormBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.updatePasswordForm = this.updatePasswordFormBuilder.group({
      password: ['', Validate.passwordValidator],
      confirmPassword: ['', Validate.passwordValidator]
    })
  }

  /* hide and show password */
  inputType: string = 'password'
  isInputTypeText: boolean = false
  eyeIcon: string = 'assets/images/svg/show-password.svg'

  hideShowPassword(): void {
    this.isInputTypeText = !this.isInputTypeText
    this.isInputTypeText ? this.eyeIcon = 'assets/images/svg/show-password.svg' : 'assets/images/svg/hide-password.svg'
    this.isInputTypeText ? this.inputType = "text" : this.inputType = "password"
  }
}
