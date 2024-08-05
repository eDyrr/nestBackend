import { Solution } from "./../solutions/solution.entity";
declare enum Difficulty {
    easy = 0,
    medium = 1,
    hard = 2
}
export declare class Problem {
    id: number;
    module_id: number;
    score: number;
    difficulty: Difficulty;
    solution: Solution;
}
export {};
