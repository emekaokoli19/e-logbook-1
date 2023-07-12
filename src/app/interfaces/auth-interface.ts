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

export interface resetPassword {
    password: string;
    confirmPassword: string;
}
