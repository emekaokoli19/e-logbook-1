import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers: [
    /* services and injectables ====== */
    AuthService
  ]
})
export class RegisterComponent {

  /* Register User form ==== */
  registerForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  // authService = inject(AuthService)

  // Getting the Reactive for instance from the form service
  // formGroup: any = this.formService.registerForm

  /* actions come into class ==== */
  /* registerUser() {
    this.authService.registerUser(this.formValues)
  } */
}