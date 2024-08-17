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
exports.Student = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./../../users/entity/user.entity");
const enrollment_entity_1 = require("../../enrollments/entity/enrollment.entity");
const progress_entity_1 = require("../../progress/entity/progress.entity");
let Student = class Student extends user_entity_1.User {
};
exports.Student = Student;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Student.prototype, "subscriber", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Student.prototype, "score", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => enrollment_entity_1.Enrollment, enrollment => enrollment.student, { cascade: ['remove'] }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", enrollment_entity_1.Enrollment)
], Student.prototype, "enrollment", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => progress_entity_1.Progress, progress => progress.student),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Student.prototype, "progress", void 0);
exports.Student = Student = __decorate([
    (0, typeorm_1.ChildEntity)()
], Student);
//# sourceMappingURL=student.entity.js.map