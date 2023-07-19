import { Component } from "@angular/core";

@Component({
    selector: 'app-auth',
    template: `
        <!-- router outlets for each component in auth module -->
            
        <!-- <app-register></app-register> -->
        <!-- <p>Hello Auth</p> -->
         <!-- <router-outlet name="login">
            <app-login></app-login>
        </router-outlet>

        <router-outlet name="forgot-password">
            <app-forgot-password></app-forgot-password>
        </router-outlet>
        
        <router-outlet name="reset-password">
            <app-reset-password></app-reset-password>
        </router-outlet>  -->
    `,
})

export class AuthComponent { 

    onPageLoad() {
        
    }
}