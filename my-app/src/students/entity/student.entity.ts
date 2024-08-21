import { Column, OneToOne, JoinColumn, Entity, OneToMany, ChildEntity } from "typeorm";
import { User } from './../../users/entity/user.entity'
import { Enrollment } from "src/entity/enrollment.entity";
import { Progress } from "src/progress/entity/progress.entity";

@ChildEntity()
export class Student extends User{
    @Column()
    subscriber: boolean ;
    
    @Column({ default: 0 })
    score: number ; 
    
    @OneToOne(() => Enrollment, enrollment => enrollment.student, { cascade: ['remove']})
    @JoinColumn()
    enrollment: Enrollment ;

    @OneToMany(() => Progress, progress => progress.student)
    @JoinColumn()
    progress: Progress[] ;
}