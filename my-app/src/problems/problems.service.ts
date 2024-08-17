import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Problem, Difficulty } from "./entity/problem.entity";
import { Repository } from "typeorm";
import { ProblemDTO } from "./dto/create-problem.dto";
import { Solution } from "src/solutions/entity/solution.entity";
@Injectable()
export class ProblemsService {
    constructor(
        @InjectRepository(Problem)
        private readonly problemRepository: Repository<Problem>
    ) {}

    findAll(): Promise<Problem[]> {
        return this.problemRepository.find() ;
    }

    findById(problem_id: number): Promise<Problem> {
        return this.problemRepository.findOne({ where: { id: problem_id } });
    }

    findByDifficulty(difficulty: Difficulty): Promise<Problem[]> {
        return this.problemRepository.findBy({ difficulty: difficulty })
    }

    async createProblem(createdProblem: ProblemDTO): Promise<Problem> {
        try {
            const problem = this.problemRepository.create() ;

            problem.module = createdProblem.module ;
            problem.score = createdProblem.score ;
            problem.module = createdProblem.module ;
            problem.solution = createdProblem.solution ;

            return this.problemRepository.save(problem) ;
        } catch(error) {
            throw new Error(error) ;
        }
    }

    async getSolution(problem_id: number): Promise<Solution> {
        try {
            const problem = await this.findById(problem_id) ;

            if(!problem) {
                throw new Error(`problem with ID: ${problem_id} not found`) ;
            }

            return problem.solution ;
        } catch(error) {
            throw new Error(error.message) ;
        }
    }
}