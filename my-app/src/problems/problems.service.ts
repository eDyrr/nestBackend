import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Problem, Difficulty } from "./entity/problem.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProblemsService {
    constructor(
        @InjectRepository(Problem)
        private readonly problemsRepository: Repository<Problem>
    ) {}

    findAll(): Promise<Problem[]> {
        return this.problemsRepository.find() ;
    }

    findById(problem_id: number): Promise<Problem> {
        return this.problemsRepository.findOne({ where: { id: problem_id } });
    }

    findByDifficulty(difficulty: Difficulty): Promise<Problem[]> {
        return this.problemsRepository.findBy({ difficulty: difficulty })
    }

    async createProblem(createdProblem: ProblemDTO): Promise<Problem> {
        
    }
}