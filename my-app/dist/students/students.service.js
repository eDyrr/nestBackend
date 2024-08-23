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
const progress_service_1 = require("../progress/progress.service");
let StudentsService = class StudentsService {
    constructor(studentRepository, enrollmentsService, specialtiesService, progressService) {
        this.studentRepository = studentRepository;
        this.enrollmentsService = enrollmentsService;
        this.specialtiesService = specialtiesService;
        this.progressService = progressService;
    }
    async createStudent(studentDTO) {
        try {
            const student = this.studentRepository.create();
            student.email = studentDTO.email;
            student.firstName = studentDTO.first_name;
            student.lastName = studentDTO.last_name;
            student.password = studentDTO.password;
            student.subscriber = studentDTO.subscriber;
            const specialty = await this.specialtiesService.getSpecialtyByName(studentDTO.specialty);
            if (!specialty) {
                throw new Error(`${studentDTO.specialty} not found`);
            }
            const savedStudent = await this.studentRepository.save(student);
            await this.enrollmentsService.enrollStudent(savedStudent.id, specialty.id);
            return savedStudent;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async findAll() {
        return await this.studentRepository.find();
    }
    getStudentById(id) {
        return this.studentRepository.findOneBy({ id });
    }
    async subscribe(id) {
        try {
            const student = await this.getStudentById(id);
            if (!student) {
                throw new Error(`student with ${id} not found`);
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
            const student = await this.getStudentById(id);
            if (!student) {
                throw new Error(`student with ID: ${id} not found`);
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
            const student = await this.getStudentById(id);
            return student.score;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    async addScore(id, score) {
        try {
            const student = await this.getStudentById(id);
            if (!student) {
                throw new Error(`student with ${id} isnt found`);
            }
            student.score += score;
            await this.studentRepository.save(student);
        }
        catch (error) {
            console.error(error);
            throw new Error('failed to add score');
        }
    }
    async getSpecialty(student_id) {
        try {
            const student = await this.getStudentById(student_id);
            if (!student) {
                throw new Error(`student with ID: ${student_id} not found`);
            }
            const specialty = await this.enrollmentsService.getSpecialty(student_id);
            return await this.specialtiesService.getSpecialtyById(specialty.id);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async getProgress(student_id) {
        try {
            const student = await this.getStudentById(student_id);
            if (!student) {
                throw new Error(`student with ID: ${student_id} not found`);
            }
            let overall = 0;
            for (let progress of student.progress) {
                overall += progress.progress;
            }
            return;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async getModuleProgress(student_id, module_id) {
        try {
            const student = await this.getStudentById(student_id);
            if (!student) {
                throw new Error(`student with ID: ${student_id} not found`);
            }
            const specialty = await this.enrollmentsService.getSpecialty(student_id);
            if (!specialty) {
                throw new Error(`specialty with student_ID: ${student_id} not found`);
            }
            const modules = await specialty.modules;
            const _module = await modules.find(m => m.id === module_id);
            const progress = await this.progressService.getProgress(student.id, _module.id);
            return progress.progress;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
exports.StudentsService = StudentsService;
exports.StudentsService = StudentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_entity_1.Student)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        enrollments_service_1.EnrollmentsService,
        specialties_service_1.SpecialtiesService,
        progress_service_1.ProgressService])
], StudentsService);
//# sourceMappingURL=students.service.js.map