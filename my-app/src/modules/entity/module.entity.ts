import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm' ;
import { Chapter } from './../../chapters/entity/chapter.entity' ;
import { Specialty } from 'src/specialties/entity/specialty.entity';

@Entity()
export class Module {
    @PrimaryGeneratedColumn()
    id: number ;

    @Column()
    name: string ;

    @ManyToOne(() => Specialty, specialty => specialty.modules)
    @JoinColumn()
    specialty: Specialty ;

    @OneToMany(() => Chapter, chapter => chapter.module)
    chapters: Chapter[] ;
}