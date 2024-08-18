import { Student } from './../../students/entity/student.entity';
import { _Module } from './../../modules/entity/module.entity';
export declare class Progress {
    id: number;
    progress: number;
    student: Student;
    module: _Module;
}
