import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm' ;
import { Chapter } from './../chapters/chapter.entity' ;

@Entity()
export class Module {
    @PrimaryGeneratedColumn()
    id: number ;

    @Column()
    name: string ;

    @Column()
    specialty_id: number ;
    
    @OneToMany(() => Chapter, chapter => chapter.module)
    chapters: Chapter[] ;
}