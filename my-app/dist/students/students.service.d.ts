import { Student } from './entity/student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { EnrollmentsService } from 'src/enrollments/enrollments.service';
import { SpecialtiesService } from 'src/specialties/specialties.service';
import { Specialty } from 'src/specialties/entity/specialty.entity';
export declare class StudentsService {
    private readonly studentRepository;
    private readonly enrollmentsService;
    private readonly specialtiesService;
    constructor(studentRepository: Repository<Student>, enrollmentsService: EnrollmentsService, specialtiesService: SpecialtiesService);
    createStudent(studentDTO: CreateStudentDto): Promise<Student>;
    findAll(): Promise<Student[]>;
    findById(id: number): Promise<Student>;
    subscribe(id: number): Promise<void>;
    unsubscribe(id: number): Promise<void>;
    getScore(id: number): Promise<number>;
    addScore(id: number, score: number): Promise<void>;
    getSpecialty(student_id: number): Promise<Specialty>;
    getProgress(student_id: number): Promise<number>;
}
