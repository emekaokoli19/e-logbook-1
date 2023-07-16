import { Injectable } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import { showHidePasswordInterface } from '../interfaces/auth-interface';
import { NgStyle } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  //  internal value accessor
  
  constructor() { }
  
  
  showHidePassword: showHidePasswordInterface = {
    value: '',
    isVisible: false,
  };
  
  changeVisibility() {
    ()=> {
      !this.showHidePassword.isVisible
      
      /* show password */
    }
  }

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

export class ShowAndHidePassword {
  
}
