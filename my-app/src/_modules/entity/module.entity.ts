import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, OneToOne } from 'typeorm' ;
import { Chapter } from './../../chapters/entity/chapter.entity' ;
import { Specialty } from 'src/specialties/entity/specialty.entity';
import { Problem } from 'src/problems/entity/problem.entity';
import { Progress } from './../../progress/entity/progress.entity' ;

//export namespace studies {
    @Entity()
    export class _Module {
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
        
        @OneToOne(() => Progress)
        progress: Progress ;
    }
//}