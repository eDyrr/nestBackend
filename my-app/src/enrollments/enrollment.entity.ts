import { Entity, PrimaryColumn } from 'typeorm' ;
import { Student } from './../students/student.entity' ;
import { Specialty } from './../specialties/specialty.entity'

@Entity()
export class Enrollment {
    @PrimaryColumn()
    specialty_id: number ;

    @PrimaryColumn()
    student_id: number ;
}