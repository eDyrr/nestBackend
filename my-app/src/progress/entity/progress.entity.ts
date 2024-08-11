import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { Student } from './../../students/entity/student.entity' ;
import { Module } from './../../modules/entity/module.entity' ;

@Entity()
export class Progress {
    @PrimaryGeneratedColumn()
    id: number ;

    @Column()
    progress: number ;

    @ManyToOne(() => Student, student => student.progress)
    @JoinColumn()
    student: Student ;

    @ManyToOne(() => Module, module => module.progress)
    @JoinColumn()
    module: Module ;
}