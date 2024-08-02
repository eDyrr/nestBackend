import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entity/student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { error } from 'console';
import { Specialties } from 'src/specialties/entity/specialty.entity';
import { Enrollment } from 'src/enrollments/entity/enrollment.entity';

@Injectable()
export class StudentsService {
    constructor(
        @InjectRepository(Student)
        private readonly studentRepository: Repository<Student>,
        @InjectRepository(Enrollment)
        private readonly enrollmentRepository: Repository<Enrollment>,
    ) {}

    async createStudent(studentDTO: CreateStudentDto): Promise<Student> {
        const student: Student = new Student() ;

        student.subscriber = studentDTO.subscriber ;
        student.enrollment.specialty.name = studentDTO.specialty ;

        return this.studentRepository.save(student) ;
    }

    async findAll(): Promise<Student[]> {
        return await this.studentRepository.find() ;
    }

    findById(id: number): Promise<Student> {
        return this.studentRepository.findOneBy({ id }) ;
    }

    async subscribe(id: number): Promise<void> {
        return this.findById(id).then((student: Student) => {
            student.subscriber = true ;
        }).catch((error) => {
            console.error("student not found", error) ;
        }) ;
    }

    async getScore(id: number): Promise<number> {
        try {
            const student = await this.findById(id) ;
            return student.score ;
        } catch(error) {
            console.error(error) ;
            throw error ;
        }
    }

    async getSpecialty(id: number): Specialties {
        try {
            const student = await this.findById(id) ;
            return student.
        }
    }
}
