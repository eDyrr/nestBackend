import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm' ;
import { _Module } from './../../_modules/entity/module.entity' ;

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

    @ManyToOne(() => _Module, module => module.chapters)
    @JoinColumn()
    module: _Module ;
}