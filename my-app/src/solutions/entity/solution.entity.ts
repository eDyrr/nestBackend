import { Entity, Column, OneToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm' ;
import { Problem } from "../../problems/problem.entity" ;

Entity()
export class Solution {
    @PrimaryGeneratedColumn()
    id: number ;

    @OneToOne(() => Problem, problem => problem.solution)
    @JoinColumn()
    problem: Problem ;
}