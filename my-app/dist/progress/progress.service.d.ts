import { Progress } from "./entity/progress.entity";
import { Repository } from "typeorm";
import { StudentsService } from "src/students/students.service";
import { EnrollmentsService } from "src/enrollments/enrollments.service";
export declare class ProgressService {
    private readonly progressRepository;
    private readonly studentsService;
    private readonly enrollmentsService;
    constructor(progressRepository: Repository<Progress>, studentsService: StudentsService, enrollmentsService: EnrollmentsService);
    init(student_id: number): Promise<void>;
    update(student_id: number, module_id: number): void;
    getProgress(student_id: number, module_id: number): Promise<Progress>;
}
