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
exports.Problem = exports.Difficulty = void 0;
const typeorm_1 = require("typeorm");
const solution_entity_1 = require("../../solutions/entity/solution.entity");
const module_entity_1 = require("../../modules/entity/module.entity");
var Difficulty;
(function (Difficulty) {
    Difficulty[Difficulty["easy"] = 0] = "easy";
    Difficulty[Difficulty["medium"] = 1] = "medium";
    Difficulty[Difficulty["hard"] = 2] = "hard";
})(Difficulty || (exports.Difficulty = Difficulty = {}));
let Problem = class Problem {
};
exports.Problem = Problem;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Problem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Problem.prototype, "score", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: Difficulty
    }),
    __metadata("design:type", Number)
], Problem.prototype, "difficulty", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => module_entity_1.Module, module => module.problems),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", module_entity_1.Module)
], Problem.prototype, "module", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => solution_entity_1.Solution, solution => solution.problem),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", solution_entity_1.Solution)
], Problem.prototype, "solution", void 0);
exports.Problem = Problem = __decorate([
    (0, typeorm_1.Entity)()
], Problem);
;
//# sourceMappingURL=problem.entity.js.map