import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entity/student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { EnrollmentsService } from 'src/enrollments/enrollments.service';
import { SpecialtiesService } from 'src/specialties/specialties.service';

@Injectable()
export class StudentsService {
    constructor(
        @InjectRepository(Student)
        private readonly studentRepository: Repository<Student>,
        private readonly enrollmentsService: EnrollmentsService,
        private readonly specialtiesService: SpecialtiesService,
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

    async addScore(id: number, score: number): Promise<void> {
        try {
            
            const student: Student = await this.findById(id) ;

            if(!student) {
                throw new Error('student with ${id} isnt found') ;
            }

            student.score += score ;

            await this.studentRepository.save(student) ;

        } catch(error) {

            console.error(error) ;
            throw new Error('failed to add score') ;

        }
    }

    async getSpecialty(id: number): Promise<string> {
        try {
            const specialtyId = await this.enrollmentsService.getSpecialtyId(id) ;
            const specialty = await this.specialtiesService.getSpecialtyById(specialtyId) ;
            return specialty ;
        } catch(error) {
            console.error(error) ;
        }
    }
}
