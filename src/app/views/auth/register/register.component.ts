import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers: [
    /* services and injectables ====== */
  ]
})
export class RegisterComponent { 

  reactiveForm!: FormGroup

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      fullName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')  
    })
  }

  /* Register User form ==== */
  registerForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })
}