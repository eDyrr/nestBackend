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
exports.ProgressService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const progress_entity_1 = require("./entity/progress.entity");
const typeorm_2 = require("typeorm");
const students_service_1 = require("../students/students.service");
const enrollments_service_1 = require("../enrollments/enrollments.service");
let ProgressService = class ProgressService {
    constructor(progressRepository, studentsService, enrollmentsService) {
        this.progressRepository = progressRepository;
        this.studentsService = studentsService;
        this.enrollmentsService = enrollmentsService;
    }
    async init(student_id) {
        try {
            const student = await this.studentsService.findById(student_id);
            if (!student) {
                throw new Error(`student with ID: ${student_id} not found`);
            }
            const specialty = await this.enrollmentsService.getSpecialtyId(student_id);
            if (!specialty) {
                throw new Error(`specialty of student: ${student.firstName} not found`);
            }
            for (let module of specialty.modules) {
                let progress = this.progressRepository.create();
                progress.student = student;
                progress.module = module;
                await this.progressRepository.save(progress);
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    update(student_id, module_id) {
    }
};
exports.ProgressService = ProgressService;
exports.ProgressService = ProgressService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(progress_entity_1.Progress)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        students_service_1.StudentsService,
        enrollments_service_1.EnrollmentsService])
], ProgressService);
//# sourceMappingURL=progress.service.js.map