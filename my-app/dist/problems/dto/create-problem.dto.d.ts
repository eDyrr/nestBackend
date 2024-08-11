import { Difficulty } from "../entity/problem.entity";
import { Module } from "src/modules/entity/module.entity";
import { Solution } from "src/solutions/entity/solution.entity";
export declare class ProblemDTO {
    score: number;
    difficulty: Difficulty;
    module: Module;
    solution?: Solution;
}
