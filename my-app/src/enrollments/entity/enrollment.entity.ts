import { Entity, PrimaryColumn, OneToMany } from 'typeorm' ;
import { Student } from '../../students/entity/student.entity' ;
import { Specialty } from '../../specialties/specialty.entity'

@Entity()
export class Enrollment {
    @OneToMany(() => Specialty, specialty => specialty.enrollment)
    specialty: Specialty ;
}