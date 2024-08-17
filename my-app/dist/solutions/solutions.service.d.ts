import { Repository } from "typeorm";
import { Solution } from "./entity/solution.entity";
export declare class SolutionsService {
    private readonly solutionRepository;
    constructor(solutionRepository: Repository<Solution>);
}
