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
exports.EnrollmentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const enrollment_entity_1 = require("./entity/enrollment.entity");
const typeorm_2 = require("typeorm");
const students_service_1 = require("../students/students.service");
const specialties_service_1 = require("../specialties/specialties.service");
let EnrollmentsService = class EnrollmentsService {
    constructor(enrollmentRepository, studentsService, specialtiesService) {
        this.enrollmentRepository = enrollmentRepository;
        this.studentsService = studentsService;
        this.specialtiesService = specialtiesService;
    }
    async getSpecialtyId(studentId) {
        try {
            const enrollment = await this.enrollmentRepository.findOne({
                where: { student: { id: studentId } },
                relations: ['specialty', 'student'],
            });
            if (enrollment && enrollment.specialty) {
                return enrollment.specialty;
            }
            else {
                throw new Error('Enrollment or Specialty not found for this student');
            }
        }
        catch (error) {
            console.error(error);
            throw new Error('Failed to retrieve the specialty ID');
        }
    }
    async enrollStudent(student_id, specialty_id) {
        try {
            const student = await this.studentsService.findById(student_id);
            if (!student) {
                throw new Error(`student with ID: ${student_id} not found`);
            }
            const specialty = await this.specialtiesService.getSpecialtyById(specialty_id);
            if (!specialty) {
                throw new Error(`specialty with ID: ${specialty_id} not found`);
            }
            const enrollment = new enrollment_entity_1.Enrollment();
            enrollment.student = student;
            enrollment.specialty = specialty;
            return this.enrollmentRepository.save(enrollment);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
exports.EnrollmentsService = EnrollmentsService;
exports.EnrollmentsService = EnrollmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(enrollment_entity_1.Enrollment)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        students_service_1.StudentsService,
        specialties_service_1.SpecialtiesService])
], EnrollmentsService);
;
//# sourceMappingURL=enrollments.service.js.map