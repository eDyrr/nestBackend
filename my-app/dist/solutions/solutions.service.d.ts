import { Repository } from "typeorm";
import { Solution } from "./entity/solution.entity";
export declare class SolutionsService {
    private readonly solutionsRepository;
    constructor(solutionsRepository: Repository<Solution>);
}
