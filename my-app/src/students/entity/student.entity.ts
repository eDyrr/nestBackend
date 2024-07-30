import { Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, Entity } from "typeorm";
import { User } from './../../users/entity/user.entity'
import { Enrollment } from "src/enrollments/entity/enrollment.entity";

@Entity()
export class Student extends User{
    @Column()
    subscriber: boolean ;
    
    @Column()
    score: number ;

    @OneToOne(() => Enrollment, enrollment => enrollment.student)
    @JoinColumn()
    enrollment: Enrollment ;
}