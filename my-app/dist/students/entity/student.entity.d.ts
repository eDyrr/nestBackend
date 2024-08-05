import { User } from './../../users/entity/user.entity';
import { Enrollment } from "src/enrollments/entity/enrollment.entity";
export declare class Student extends User {
    subscriber: boolean;
    score: number;
    enrollment: Enrollment;
}
