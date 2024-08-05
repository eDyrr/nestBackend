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
exports.StudentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const student_entity_1 = require("./entity/student.entity");
const typeorm_2 = require("typeorm");
const enrollments_service_1 = require("../enrollments/enrollments.service");
const specialties_service_1 = require("../specialties/specialties.service");
let StudentsService = class StudentsService {
    constructor(studentRepository, enrollmentsService, specialtiesService) {
        this.studentRepository = studentRepository;
        this.enrollmentsService = enrollmentsService;
        this.specialtiesService = specialtiesService;
    }
    async createStudent(studentDTO) {
        const student = new student_entity_1.Student();
        student.subscriber = studentDTO.subscriber;
        const specialty = await this.specialtiesService.getSpecialtyByName(studentDTO.specialty);
        if (!specialty) {
            throw new Error("${studentDTO.specialty} not found");
        }
        return this.studentRepository.save(student);
    }
    async findAll() {
        return await this.studentRepository.find();
    }
    findById(id) {
        return this.studentRepository.findOneBy({ id });
    }
    async subscribe(id) {
        try {
            const student = await this.findById(id);
            if (!student) {
                throw new Error('student with ${id} not found');
            }
            student.subscriber = true;
            this.studentRepository.save(student);
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async unsubscribe(id) {
        try {
            const student = await this.findById(id);
            if (!student) {
                throw new Error('student with ID: ${id} not found');
            }
            student.subscriber = false;
            this.studentRepository.save(student);
        }
        catch (error) {
            console.error(error.message);
        }
    }
    async getScore(id) {
        try {
            const student = await this.findById(id);
            return student.score;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    async addScore(id, score) {
        try {
            const student = await this.findById(id);
            if (!student) {
                throw new Error('student with ${id} isnt found');
            }
            student.score += score;
            await this.studentRepository.save(student);
        }
        catch (error) {
            console.error(error);
            throw new Error('failed to add score');
        }
    }
    async getSpecialty(id) {
        try {
            const specialtyId = await this.enrollmentsService.getSpecialtyId(id);
            if (!specialtyId) {
                throw new Error('specialty ID not found');
            }
            const specialty = await this.specialtiesService.getSpecialtyById(specialtyId);
            if (!specialty) {
                throw new Error('specialty not found');
            }
            return specialty;
        }
        catch (error) {
            throw new Error(error);
        }
    }
};
exports.StudentsService = StudentsService;
exports.StudentsService = StudentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_entity_1.Student)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        enrollments_service_1.EnrollmentsService,
        specialties_service_1.SpecialtiesService])
], StudentsService);
//# sourceMappingURL=students.service.js.map