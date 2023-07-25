import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { authInitialValues, email, login, password } from 'src/app/interfaces/auth-interface'; 

export const fullNameValidators = [
  Validators.required,
  Validators.minLength(2),
  Validators.maxLength(18)
]

export const emailValidators = [
  Validators.pattern(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/g),
  Validators.required,
  Validators.minLength(4),
  Validators.maxLength(15)
]

export const passwordValidators = [
  Validators.minLength(8),
  Validators.maxLength(30),
]

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [
    /* services and injectables ====== */
  ]
})
export class LoginComponent {

  /* Login User Form ===== */
  loginForm = new FormGroup
  // <authInitialValues["login"]>
    ({
      email: new FormControl(),
      password: new FormControl('')
    })

  /* Individual Form Controls */
  email = new FormControl('', {
    nonNullable: true,
    validators: emailValidators
  })

  password = new FormControl('', {
    nonNullable: true,
    validators: passwordValidators
  })
}
