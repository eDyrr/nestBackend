import { User } from 'src/users/entity/user.entity';
import { Admin, Repository } from 'typeorm';
import { Student } from 'src/students/entity/student.entity';
import { StudentsService } from 'src/students/students.service';
import { SpecialtiesService } from 'src/specialties/specialties.service';
import { Specialties } from 'src/specialties/entity/specialty.entity';
import { EnrollmentsService } from 'src/enrollments/enrollments.service';
export declare enum Roles {
    ADMIN = "admin",
    STUDENT = "STUDENT"
}
export declare class Auth {
    private readonly usersRepository;
    private readonly studentsService;
    private readonly specialtiesService;
    private readonly enrollmentsService;
    constructor(usersRepository: Repository<User>, studentsService: StudentsService, specialtiesService: SpecialtiesService, enrollmentsService: EnrollmentsService);
    signUp(first_name: string, last_name: string, email: string, password: string, role: Roles, student?: Student, admin?: Admin, specialty?: Specialties, subscribed?: boolean): Promise<User>;
    logIn(email: string, password: string): Promise<string>;
}
