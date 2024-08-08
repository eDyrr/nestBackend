import { User } from 'src/users/entity/user.entity';
import { Admin, Repository } from 'typeorm';
import { Student } from 'src/students/entity/student.entity';
export declare enum Roles {
    ADMIN = "admin",
    STUDENT = "STUDENT"
}
export declare class Auth {
    private readonly usersRepo;
    constructor(usersRepo: Repository<User>);
    signUp(first_name: string, last_name: string, email: string, password: string, role: Roles, studnet: Student, admin: Admin): Promise<User>;
    logIn(email: string, password: string): Promise<string>;
}
