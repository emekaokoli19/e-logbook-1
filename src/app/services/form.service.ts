import { Injectable } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  registerForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  forgotPasswordForm = new FormGroup({
    email: new FormControl('')
  })

  resetPasswordForm = new FormGroup({
    newPassword: new FormControl(''),
    confirmNewPassword: new FormControl('')
  })
}
