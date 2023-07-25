// all auth slices and interfaces are in here.

export interface register {
    fullName: string;
    email: string;
    password: string;
}

export interface login {
    email: string;
    password: string;
}

export interface forgotPassword {
    email: string;
}

export interface updatePassword {
    password: string;
    confirmPassword: string;
}

export interface authInitialValues {
    register: {
        fullName: '',
        email: '',
        password: ''
    },
    login: {
        email: '',
        password: '',
    },
    forgotPassword: {
        email: '',
    },
    updatePassword: {
        password: '',
        confirmPassword: ''
    }
}

/* For Individual Form Controls - Types set as values*/
export type fullName = '';
export type email = '';
export type password = '';
export type confirmPassword= '';

export interface showHidePasswordInterface {
    value: string | number | null,
    isVisible: boolean
} 