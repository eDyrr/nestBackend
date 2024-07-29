import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { User } from './../../users/entity/user.entity'
import { Enrollment } from "src/enrollments/entity/enrollment.entity";

@Entity()
export class Student extends User{
    @Column()
    user_id: number ;

    @Column()
    subscriber: boolean ;
    
    @Column()
    score: number ;

    @OneToOne(() => User, user => user.student)
    @JoinColumn({name: 'user_id'})
    user: User ;

    @OneToOne(() => Enrollment, enrollment => enrollment.student)
    @JoinColumn({name: 'student_id'})
    enrollment: Enrollment ;
}