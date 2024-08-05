import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
export declare class StudentsController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
    createStudent(studentDTO: CreateStudentDto): Promise<import("./entity/student.entity").Student>;
    getAllStudents(): Promise<import("./entity/student.entity").Student[]>;
    getStudentById(id: number): Promise<import("./entity/student.entity").Student>;
    getStudentScore(id: number): Promise<number>;
    getStudentSpecialty(id: number): Promise<import("../specialties/entity/specialty.entity").Specialty>;
}
