import { Entity, PrimaryColumn, OneToMany } from 'typeorm' ;
import { Student } from '../../students/entity/student.entity' ;
import { Specialty } from '../../specialties/specialty.entity'

@Entity()
export class Enrollment {
    @PrimaryColumn()
    specialty_id: number ;

    @PrimaryColumn()
    student_id: number ;

    @OneToMany(() => Student, student => student.enrollment)
    student: Student ;
    @OneToMany(() => Specialty, specialty => specialty.enrollment)
    specialty: Specialty ;
}