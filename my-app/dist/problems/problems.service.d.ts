import { Problem, Difficulty } from "./entity/problem.entity";
import { Repository } from "typeorm";
import { ProblemDTO } from "./dto/create-problem.dto";
import { Solution } from "src/solutions/entity/solution.entity";
export declare class ProblemsService {
    private readonly problemsRepository;
    constructor(problemsRepository: Repository<Problem>);
    findAll(): Promise<Problem[]>;
    findById(problem_id: number): Promise<Problem>;
    findByDifficulty(difficulty: Difficulty): Promise<Problem[]>;
    createProblem(createdProblem: ProblemDTO): Promise<Problem>;
    getSolution(problem_id: number): Promise<Solution>;
}
