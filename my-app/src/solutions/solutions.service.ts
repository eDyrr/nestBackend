import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Solution } from "./entity/solution.entity" ;
import { ProblemsService } from "src/problems/problems.service";

@Injectable()
export class SolutionsService {
    constructor(
        private readonly solutionsRepository: Repository<Solution>,
    ) {}
}