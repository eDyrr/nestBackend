import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm' ;
import { Specialty } from '../../specialties/entity/specialty.entity'
import { Student } from 'src/students/entity/student.entity';

@Entity('enrollment')
export class Enrollment {
    
    @ManyToOne(() => Specialty, specialty => specialty.enrollment)
    @JoinColumn({ name: 'specialty_id'})
    specialty: Specialty ;

    @ManyToOne(() => Student, student => student.enrollment)
    @JoinColumn({ name: 'student_id'})
    student: Student ;
}