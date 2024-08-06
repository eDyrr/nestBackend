export declare enum Roles {
    ADMIN = "admin",
    STUDENT = "STUDENT"
}
export declare class Auth {
    signUp(first_name: string, last_name: string, email: string, password: string, Roles: Roles): Promise<void>;
}
