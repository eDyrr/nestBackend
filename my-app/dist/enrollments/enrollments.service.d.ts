import { Enrollment } from "./entity/enrollment.entity";
import { Repository } from "typeorm";
import { StudentsService } from "../../src/students/students.service";
import { SpecialtiesService } from "src/specialties/specialties.service";
import { Specialty } from "src/specialties/entity/specialty.entity";
export declare class EnrollmentsService {
    private readonly enrollmentRepository;
    private readonly studentsService;
    private readonly specialtiesService;
    constructor(enrollmentRepository: Repository<Enrollment>, studentsService: StudentsService, specialtiesService: SpecialtiesService);
    getSpecialty(studentId: number): Promise<Specialty>;
    enrollStudent(student_id: number, specialty_id: number): Promise<Enrollment>;
}
