import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { Student } from './../../students/entity/student.entity' ;
import { studies } from './../../modules/entity/module.entity' ;

@Entity()
export class Progress {
    @PrimaryGeneratedColumn()
    id: number ;

    @Column({ default: 0 })
    progress: number ;

    @ManyToOne(() => Student, student => student.progress)
    student: Student ;

    @ManyToOne(() => studies.Module, module => module.progress)
    @JoinColumn()
    module: studies.Module ;
}