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
exports.Progress = void 0;
const typeorm_1 = require("typeorm");
const student_entity_1 = require("./../../students/entity/student.entity");
const module_entity_1 = require("./../../modules/entity/module.entity");
let Progress = class Progress {
};
exports.Progress = Progress;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Progress.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Progress.prototype, "progress", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_entity_1.Student, student => student.progress),
    __metadata("design:type", student_entity_1.Student)
], Progress.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => module_entity_1.studies.Module, module => module.progress),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", module_entity_1.studies.Module)
], Progress.prototype, "module", void 0);
exports.Progress = Progress = __decorate([
    (0, typeorm_1.Entity)()
], Progress);
//# sourceMappingURL=progress.entity.js.map