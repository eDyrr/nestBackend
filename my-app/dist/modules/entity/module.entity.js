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
exports.Module = void 0;
const typeorm_1 = require("typeorm");
const chapter_entity_1 = require("./../../chapters/entity/chapter.entity");
const specialty_entity_1 = require("../../specialties/entity/specialty.entity");
const problem_entity_1 = require("../../problems/entity/problem.entity");
let Module = class Module {
};
exports.Module = Module;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Module.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Module.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => specialty_entity_1.Specialty, specialty => specialty.modules),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", specialty_entity_1.Specialty)
], Module.prototype, "specialty", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => chapter_entity_1.Chapter, chapter => chapter.module),
    __metadata("design:type", Array)
], Module.prototype, "chapters", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => problem_entity_1.Problem, problem => problem.module),
    __metadata("design:type", Array)
], Module.prototype, "problems", void 0);
exports.Module = Module = __decorate([
    (0, typeorm_1.Entity)()
], Module);
//# sourceMappingURL=module.entity.js.map