import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, OneToOne } from 'typeorm' ;
import { Chapter } from './../../chapters/entity/chapter.entity' ;
import { Specialty } from 'src/specialties/entity/specialty.entity';
import { Problem } from 'src/problems/entity/problem.entity';
import { Progress } from './../../progress/entity/progress.entity' ;

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

    @OneToMany(() => Problem, problem => problem.module)
    problems: Problem[] ;

    @OneToMany(() => Progress, progress => progress.module)
    progress: Progress[] ;
}