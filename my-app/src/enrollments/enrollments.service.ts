import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Enrollment } from "./entity/enrollment.entity";
import { Repository } from "typeorm";
import { StudentsService } from "src/students/students.service";
import { SpecialtiesService } from "src/specialties/specialties.service";
import { Specialty } from "src/specialties/entity/specialty.entity";

@Injectable()
export class EnrollmentsService {
    constructor(
        @InjectRepository(Enrollment)
        private readonly enrollmentRepository: Repository<Enrollment>,
        private readonly studentsService: StudentsService,
        private readonly specialtiesService: SpecialtiesService,
    ) {}

    async getSpecialtyId(studentId: number): Promise<Specialty> {
        try {
            const enrollment = await this.enrollmentRepository.findOne({ 
                where: { student: { id: studentId } },
                relations: ['specialty', 'student'],
            });
            
            if (enrollment && enrollment.specialty) {
                return enrollment.specialty ;
            } else {
                throw new Error('Enrollment or Specialty not found for this student');
            }
        } catch (error) {
            console.error(error);
            throw new Error('Failed to retrieve the specialty ID');
        }
    }

    async enrollStudent(student_id: number, specialty_id: number): Promise<Enrollment> {
        try {
            const student = await this.studentsService.findById(student_id) ;
            
            if(!student) {
                throw new Error(`student with ID: ${student_id} not found`) ;
            }
            
            const specialty = await this.specialtiesService.getSpecialtyById(specialty_id) ;
            
            if(!specialty) {
                throw new Error(`specialty with ID: ${specialty_id} not found`) ;
            }

            const enrollment: Enrollment = new Enrollment() ;
            
            enrollment.student = student ;
            enrollment.specialty = specialty ;

            return this.enrollmentRepository.save(enrollment) ;
        } catch(error) {
            throw new Error(error.message) ;
        }
    }
}
