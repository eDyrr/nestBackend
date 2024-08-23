import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Student } from './../../students/entity/student.entity' ;
import { _Module } from './../../modules/entity/module.entity' ;

@Entity()
export class Progress {
    @PrimaryColumn()
    studentId: number ;

    @PrimaryColumn()
    moduleId: number ;

    @Column({ default: 0 })
    progress: number ;

    @ManyToOne(() => Student, student => student.progress)
    @JoinColumn({ name: 'studentId'})
    student: Student ;

    @ManyToOne(() => _Module, module => module.progress)
    @JoinColumn({ name: 'moduleId'})
    module: _Module ;
}