import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm' ;
import { Module } from './../../modules/entity/module.entity' ;

@Entity()
export class Chapter {
    @PrimaryGeneratedColumn()
    id: number ;

    @Column()
    title: string ;

    @Column()
    order: number ;

    @Column()
    is_paid: boolean ;

    @ManyToOne(() => Module, module => module.chapters)
    @JoinColumn()
    module: Module ;
}