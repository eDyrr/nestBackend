import { Student } from './../../students/entity/student.entity';
import { _Module } from './../../_modules/entity/module.entity';
export declare class Progress {
    studentId: number;
    moduleId: number;
    progress: number;
    student: Student;
    module: _Module;
}
