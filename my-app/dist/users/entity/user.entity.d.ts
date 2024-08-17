import { Student } from "../../students/entity/student.entity";
export declare enum Role {
    STUDENT = "STUDENT",
    ADMIN = "ADMIN"
}
export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: Role;
    student?: Student;
}
