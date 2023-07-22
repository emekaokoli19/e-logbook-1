import { Injectable } from '@angular/core';
import { showHidePasswordInterface } from '../interfaces/auth-interface';

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
}

export class ShowAndHidePassword {
  
}
