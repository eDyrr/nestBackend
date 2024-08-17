import { Student } from './../../students/entity/student.entity';
import { studies } from './../../modules/entity/module.entity';
export declare class Progress {
    id: number;
    progress: number;
    student: Student;
    module: studies.Module;
}
