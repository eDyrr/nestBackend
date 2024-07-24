import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";


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

    @Column()
    difficulty: Difficulty ;

    @OneToOne(() => )
};