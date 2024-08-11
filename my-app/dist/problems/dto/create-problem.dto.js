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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProblemDTO = void 0;
const class_validator_1 = require("class-validator");
const problem_entity_1 = require("../entity/problem.entity");
const module_entity_1 = require("../../modules/entity/module.entity");
const solution_entity_1 = require("../../solutions/entity/solution.entity");
const class_transformer_1 = require("class-transformer");
class ProblemDTO {
}
exports.ProblemDTO = ProblemDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProblemDTO.prototype, "score", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(problem_entity_1.Difficulty),
    __metadata("design:type", Number)
], ProblemDTO.prototype, "difficulty", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => module_entity_1.Module),
    __metadata("design:type", module_entity_1.Module)
], ProblemDTO.prototype, "module", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => solution_entity_1.Solution),
    __metadata("design:type", solution_entity_1.Solution)
], ProblemDTO.prototype, "solution", void 0);
//# sourceMappingURL=create-problem.dto.js.map