import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
// import { authInitialValues, email, login, password } from 'src/app/interfaces/auth-interface'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [
    /* services and injectables ====== */
  ]
})
export class LoginComponent {

  /* Login User Form ===== */
  loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl('')
    })
}
