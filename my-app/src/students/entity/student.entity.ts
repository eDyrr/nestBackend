import { Column, OneToOne, JoinColumn, Entity, OneToMany } from "typeorm";
import { User } from './../../users/entity/user.entity'
import { Enrollment } from "src/enrollments/entity/enrollment.entity";
import { Progress } from "src/progress/entity/progress.entity";

@Entity()
export class Student extends User{
    @Column()
    subscriber: boolean ;
    
    @Column()
    score: number ;

    @OneToOne(() => User, user => user.student)
    @JoinColumn()
    user: User ;
    
    @OneToOne(() => Enrollment, enrollment => enrollment.student)
    @JoinColumn()
    enrollment: Enrollment ;

    @OneToMany(() => Progress, progress => progress.student)
    progress: Progress[] ;
}