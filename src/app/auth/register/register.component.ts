import { Component, inject } from '@angular/core';
import {FormService} from "../../services/form.service";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  // imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  providers: []
})
export class RegisterComponent {
  authService = inject(AuthService)
  formService = inject(FormService)

  // Getting the Reactive for instance from the form service
  formGroup: any = this.formService.registerForm

/*  formValues = {
    fullName: this.formGroup.value.fullName ?? '',
    email: this.formGroup.value.email ?? '',
    password: this.formGroup.value.password ?? '',
  }
*/
  /* actions come into class ==== */
  /* registerUser() {
    this.authService.registerUser(this.formValues)
  } */
}