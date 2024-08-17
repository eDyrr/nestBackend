"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProblemsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const problem_entity_1 = require("./entity/problem.entity");
const typeorm_2 = require("typeorm");
let ProblemsService = class ProblemsService {
    constructor(problemRepository) {
        this.problemRepository = problemRepository;
    }
    findAll() {
        return this.problemRepository.find();
    }
    findById(problem_id) {
        return this.problemRepository.findOne({ where: { id: problem_id } });
    }
    findByDifficulty(difficulty) {
        return this.problemRepository.findBy({ difficulty: difficulty });
    }
    async createProblem(createdProblem) {
        try {
            const problem = this.problemRepository.create();
            problem.module = createdProblem.module;
            problem.score = createdProblem.score;
            problem.module = createdProblem.module;
            problem.solution = createdProblem.solution;
            return this.problemRepository.save(problem);
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async getSolution(problem_id) {
        try {
            const problem = await this.findById(problem_id);
            if (!problem) {
                throw new Error(`problem with ID: ${problem_id} not found`);
            }
            return problem.solution;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
exports.ProblemsService = ProblemsService;
exports.ProblemsService = ProblemsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(problem_entity_1.Problem)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProblemsService);
//# sourceMappingURL=problems.service.js.map