import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validate } from 'src/app/shared/helpers/validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup

  /* To avoid re-typing boilerplate code */
  constructor(private loginFormBuilder: FormBuilder) {}

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

  /* Login User Form ===== */
  ngOnInit(): void { /*create form as Component loads */
    this.loginForm = this.loginFormBuilder.group({
      email: ['', Validate.emailValidator],
      password: ['', Validate.passwordValidator]
    })
  }

  /* When user clicks login button */
  onLoginUser() {
      console.log(this.loginForm.value)
  }
}
