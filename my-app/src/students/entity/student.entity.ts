import { Column, OneToOne, JoinColumn, OneToMany, ChildEntity } from "typeorm";
import { User } from 'src/users/entity/user.entity'
import { Enrollment } from "../../enrollments/entity/enrollment.entity";
import { Progress } from "src/progress/entity/progress.entity";

@ChildEntity()
export class Student extends User {
    @Column({ default: false })
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