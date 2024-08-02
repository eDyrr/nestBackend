import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Enrollment } from "./entity/enrollment.entity";
import { Repository } from "typeorm";

@Injectable()
export class EnrollmentsService {
    constructor(
        @InjectRepository(Enrollment)
        private readonly enrollmentRepository: Repository<Enrollment>,
    ) {}

    async getSpecialtyId(studentId: number): Promise<number> {
        try {
            const enrollment = await this.enrollmentRepository.findOne({ 
                where: { student: { id: studentId } },
                relations: ['specialty', 'student'],
            });
            
            if (enrollment && enrollment.specialty) {
                return enrollment.specialty.id;
            } else {
                throw new Error('Enrollment or Specialty not found for this student');
            }
        } catch (error) {
            console.error(error);
            throw new Error('Failed to retrieve the specialty ID');
        }
    }
}
