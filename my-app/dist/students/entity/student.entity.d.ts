import { User } from 'src/users/entity/user.entity';
import { Enrollment } from "../../enrollments/entity/enrollment.entity";
import { Progress } from "src/progress/entity/progress.entity";
export declare class Student extends User {
    subscriber: boolean;
    score: number;
    enrollment: Enrollment;
    progress: Progress[];
}
