import { Column, OneToOne, JoinColumn, Entity, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { User } from './../../users/entity/user.entity'
import { Enrollment } from "src/enrollments/entity/enrollment.entity";
import { Progress } from "src/progress/entity/progress.entity";

@Entity()
export class Student extends User{
    @Column()
    subscriber: boolean ;
    
    @Column()
    score: number ;

    @OneToOne(() => Enrollment, enrollment => enrollment.student)
    @JoinColumn()
    enrollment: Enrollment ;

    @OneToMany(() => Progress, progress => progress.student)
    progress: Progress[] ;
}