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

/* For Individual Form Controls - Type set as values or datatype */
export type fullName = string | '';
export type email = string | '';
export type password = string | '';
export type confirmPassword= string | '';