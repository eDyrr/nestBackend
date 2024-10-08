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
exports.Enrollment = void 0;
const typeorm_1 = require("typeorm");
const specialty_entity_1 = require("../../specialties/entity/specialty.entity");
const student_entity_1 = require("../../students/entity/student.entity");
let Enrollment = class Enrollment {
};
exports.Enrollment = Enrollment;
__decorate([
    (0, typeorm_1.ManyToOne)(() => specialty_entity_1.Specialty, specialty => specialty.enrollments),
    (0, typeorm_1.JoinColumn)({ name: 'specialty_id' }),
    __metadata("design:type", specialty_entity_1.Specialty)
], Enrollment.prototype, "specialty", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_entity_1.Student, student => student.enrollment),
    (0, typeorm_1.JoinColumn)({ name: 'student_id' }),
    __metadata("design:type", student_entity_1.Student)
], Enrollment.prototype, "student", void 0);
exports.Enrollment = Enrollment = __decorate([
    (0, typeorm_1.Entity)('enrollment')
], Enrollment);
//# sourceMappingURL=enrollment.entity.js.map