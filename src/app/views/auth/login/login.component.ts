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
  constructor(private loginFormBuilder: FormBuilder) { }

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
