import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Solution } from "./../solutions/solution.entity";

enum Difficulty {
    easy,
    medium,
    hard
}

@Entity()
export class Problem {
    @PrimaryGeneratedColumn()
    id: number ;
    
    @Column()
    module_id: number ;

    @Column()
    score: number ;

    @Column({
        type: "enum",
        enum: Difficulty
    })
    difficulty: Difficulty ;

    @OneToOne(() => Solution, solution => solution.problem)
    @JoinColumn()
    solution: Solution ;
};