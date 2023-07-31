# Useful Code Snippets I'm not using for the application workflow

## Snippets

### Snippet 1 - Routing with the use of modules or the lazy-loading method

``` ts
        {
        path: 'auth',
        redirectTo: '/auth/login',
    },
    // /* Routing without the use of module but components ======*/
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: LoginComponent,
                title: 'Login'
            },
            {
                path: 'register',
                component: RegisterComponent,
                title: 'Sign Up'
            },
            {
                path: 'forgot-password',
                component: ForgotPasswordComponent,
                title: 'Forgot Password'
            },
            {
                path: 'update-password',
                component: UpdatePasswordComponent,
                title: 'Change Password'
            },
        
        ]
    }, /* Set page title per routes ===== */

    {
        path: 'home',
        children: [
            {
                path: 'dashboard',
                component: Dashboard,
                children: [
    //                 /* In here contains the list of all routed components in on the dashboard */
                ]
            }
        ]
    },

    {
        path: '**', component: Error404Component
    }
    /* ====== Routing without the use of module but components */
```

### Snippet 2 - Method for validating the forms

``` ts
  private validateAllFormInputs(formGroup: FormGroup) {
       Object.keys(formGroup.controls).forEach(input => {
           const formControl = formGroup.get(input)

           if (formControl instanceof FormControl) {
               formControl.markAsDirty({
                   onlySelf: true /* only this control would be marked as dirty if it's invalid onSubmit */
               })
           }
           else if (formControl instanceof FormGroup) {
                this.validateAllFormInputs(formControl)
           }
      })
   }
```

### Snippet 3

