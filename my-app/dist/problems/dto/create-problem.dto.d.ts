import { Difficulty } from "../entity/problem.entity";
import { _Module } from "src/modules/entity/module.entity";
import { Solution } from "src/solutions/entity/solution.entity";
export declare class ProblemDTO {
    score: number;
    difficulty: Difficulty;
    module: _Module;
    solution?: Solution;
}
