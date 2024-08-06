import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entity/student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { EnrollmentsService } from 'src/enrollments/enrollments.service';
import { SpecialtiesService } from 'src/specialties/specialties.service';
import { Specialties, Specialty } from 'src/specialties/entity/specialty.entity';
import { Enrollment } from 'src/enrollments/entity/enrollment.entity';

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

        const specialty = await this.specialtiesService.getSpecialtyByName(studentDTO.specialty) ;
        if(!specialty) {
            throw new Error("${studentDTO.specialty} not found") ;
        }

        this.enrollmentsService.enrollStudent(student.id, specialty.id) ;
        
        return this.studentRepository.save(student) ;
    }

    async findAll(): Promise<Student[]> {
        return await this.studentRepository.find() ;
    }

    findById(id: number): Promise<Student> {
        return this.studentRepository.findOneBy({ id }) ;
    }

    async subscribe(id: number): Promise<void> {
        try {
            const student: Student = await this.findById(id) ;
            
            if(!student) {
                throw new Error('student with ${id} not found') ;
            }

            student.subscriber = true ;
            this.studentRepository.save(student) ;
        } catch(error) {
            throw new Error(error) ;
        }
    }

    async unsubscribe(id: number): Promise<void> {
        try {
            const student: Student = await this.findById(id) ;

            if(!student) {
                throw new Error('student with ID: ${id} not found') ;
            }

            student.subscriber = false ;
            this.studentRepository.save(student) ;
        } catch(error) {
            console.error(error.message) ;
        }
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

    async getSpecialty(id: number): Promise<Specialty> {
        try {
            const specialtyId = await this.enrollmentsService.getSpecialtyId(id) ;
            
            if(!specialtyId) {
                throw new Error('specialty ID not found') ;
            }

            const specialty = await this.specialtiesService.getSpecialtyById(specialtyId) ;

            if(!specialty) {
                throw new Error('specialty not found') ;
            }

            return specialty ;
        } catch(error) {
            throw new Error(error) ;
        }
    }
}
