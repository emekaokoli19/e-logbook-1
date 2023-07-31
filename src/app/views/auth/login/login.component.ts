import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validate } from 'src/app/shared/helpers/validators';
import {FormService} from "../../../shared/services/form.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup

  /* To avoid re-typing boilerplate code */
  constructor(private loginFormBuilder: FormBuilder, private formService: FormService) {}

  /* logic for showing and hiding password as a service */
  inputType = this.formService.inputType
  eyeIcon = this.formService.eyeIcon
  iconIsVisibleMethod = this.formService.hideShowPassword

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

    /* Validate, if no error authenticate user */

  }
}
