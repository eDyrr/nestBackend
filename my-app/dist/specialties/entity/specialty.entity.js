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
exports.Specialty = exports.Specialties = void 0;
const typeorm_1 = require("typeorm");
const enrollment_entity_1 = require("../../enrollments/entity/enrollment.entity");
const module_entity_1 = require("../../_modules/entity/module.entity");
exports.Specialties = {
    MATH: 'MATH',
    SCIENCE: 'SCIENCE',
    CIVIL_ENGINEERING: 'CIVIL-ENGINEERING',
    ELECTRICAL_ENGINEERING: 'ELECTRICAL-ENGINEERING',
    CHEMICAL_ENGINEERING: 'CHEMICAL-ENGINEERING',
    LANGUAGES: 'LANGUAGES',
    ECONOMICS: 'ECONOMICS',
    LITERATURE_PHILOSOPHY: 'LITERATURE & PHILOSOPHY',
};
let Specialty = class Specialty {
};
exports.Specialty = Specialty;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Specialty.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: exports.Specialties,
    }),
    __metadata("design:type", String)
], Specialty.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => enrollment_entity_1.Enrollment, enrollment => enrollment.specialty),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Specialty.prototype, "enrollments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => module_entity_1._Module, module => module.specialty),
    __metadata("design:type", Array)
], Specialty.prototype, "modules", void 0);
exports.Specialty = Specialty = __decorate([
    (0, typeorm_1.Entity)('Specialty')
], Specialty);
//# sourceMappingURL=specialty.entity.js.map