import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Solution } from "../../solutions/entity/solution.entity";
import { studies } from "src/modules/entity/module.entity";

export enum Difficulty {
    easy,
    medium,
    hard
}

@Entity()
export class Problem {
    @PrimaryGeneratedColumn()
    id: number ;
    
    @Column()
    score: number ;

    @Column({
        type: "enum",
        enum: Difficulty
    })
    difficulty: Difficulty ;

    @ManyToOne(() => studies.Module, module => module.problems)
    @JoinColumn()
    module: studies.Module ;

    @OneToOne(() => Solution, solution => solution.problem)
    @JoinColumn()
    solution: Solution ;
};