import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm' ;
import { studies } from './../../modules/entity/module.entity' ;

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

    @ManyToOne(() => studies.Module, module => module.chapters)
    @JoinColumn()
    module: studies.Module ;
}