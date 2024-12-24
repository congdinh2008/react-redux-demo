export interface LoginRequest {
    username: string;
    password: string;
}

export interface User {
    id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    displayName: string;
    phoneNumber: string;
    dateOfBirth: string;
}