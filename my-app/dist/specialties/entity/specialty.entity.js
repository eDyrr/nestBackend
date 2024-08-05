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
var Specialties;
(function (Specialties) {
    Specialties[Specialties["MATH"] = 0] = "MATH";
    Specialties[Specialties["SCIENCE"] = 1] = "SCIENCE";
    Specialties[Specialties["CIVIL-ENGINEERING"] = 2] = "CIVIL-ENGINEERING";
    Specialties[Specialties["ELECTRICAL-ENGINEERING"] = 3] = "ELECTRICAL-ENGINEERING";
    Specialties[Specialties["CHEMICAL-ENGINEERING"] = 4] = "CHEMICAL-ENGINEERING";
    Specialties[Specialties["LANGUAGES"] = 5] = "LANGUAGES";
    Specialties[Specialties["ECONOMICS"] = 6] = "ECONOMICS";
    Specialties[Specialties["LITERATURE & PHILOSOPHY"] = 7] = "LITERATURE & PHILOSOPHY";
})(Specialties || (exports.Specialties = Specialties = {}));
let Specialty = class Specialty {
};
exports.Specialty = Specialty;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Specialty.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Specialty.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => enrollment_entity_1.Enrollment, enrollment => enrollment.specialty),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Specialty.prototype, "enrollments", void 0);
exports.Specialty = Specialty = __decorate([
    (0, typeorm_1.Entity)('Specialty')
], Specialty);
//# sourceMappingURL=specialty.entity.js.map