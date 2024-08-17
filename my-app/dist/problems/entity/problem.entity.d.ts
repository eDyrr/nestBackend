import { Solution } from "../../solutions/entity/solution.entity";
import { studies } from "src/modules/entity/module.entity";
export declare enum Difficulty {
    easy = 0,
    medium = 1,
    hard = 2
}
export declare class Problem {
    id: number;
    score: number;
    difficulty: Difficulty;
    module: studies.Module;
    solution: Solution;
}
