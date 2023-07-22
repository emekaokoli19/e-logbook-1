import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [
    /* services and injectables ====== */
    AuthService
  ]
})
export class LoginComponent {

  /* Login User Form ===== */
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
}
