import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Progress } from "./entity/progress.entity";
import { Repository } from "typeorm";
import { StudentsService } from "src/students/students.service";
import { EnrollmentsService } from "src/enrollments/enrollments.service";

@Injectable()
export class ProgressService {
    constructor(
        @InjectRepository(Progress)
        private readonly progressRepository: Repository<Progress>,
        private readonly studentsService: StudentsService,
        private readonly enrollmentsService: EnrollmentsService,
    ) {}

    async init(student_id: number) {
        try {
            const student = await this.studentsService.findById(student_id) ;

            if(!student) {
                throw new Error(`student with ID: ${student_id} not found`) ;
            }

            const specialty = await this.enrollmentsService.getSpecialtyId(student_id) ;
            
            if(!specialty) {
                throw new Error(`specialty of student: ${student.firstName} not found`) ;
            }
            
            for(let module of specialty.modules) {
                let progress: Progress = this.progressRepository.create() ;
                progress.student = student ;
                progress.module = module ;
                await this.progressRepository.save(progress) ;
            }

        } catch(error) {
            throw new Error(error.message) ;
        }
    }

    update(student_id: number, module_id: number) {

    }
}