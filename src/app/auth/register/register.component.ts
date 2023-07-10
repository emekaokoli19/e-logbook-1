import { Component, inject } from '@angular/core';
import {FormService} from "../../services/form.service";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  // imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  // router links
  routerLinkActive: string = 'active'

  authService = inject(AuthService)
  formService = inject(FormService)
  
  formGroup: any = this.formService.registerForm

  formValues = {
    fullName: this.formGroup.value.fullName ?? '',
    email: this.formGroup.value.email ?? '',
    password: this.formGroup.value.password ?? '',
  }
  
  /* actions come into class ==== */
  registerUser() {
    this.authService.registerUser(this.formValues)
  }
}