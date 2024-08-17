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
exports.Auth = exports.Roles = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const user_entity_1 = require("../users/entity/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const util_1 = require("util");
const students_service_1 = require("../students/students.service");
const specialties_service_1 = require("../specialties/specialties.service");
const create_student_dto_1 = require("../students/dto/create-student.dto");
const enrollments_service_1 = require("../enrollments/enrollments.service");
const scrypt = (0, util_1.promisify)(crypto_1.scrypt);
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "admin";
    Roles["STUDENT"] = "STUDENT";
})(Roles || (exports.Roles = Roles = {}));
let Auth = class Auth {
    constructor(usersRepository, studentsService, specialtiesService, enrollmentsService) {
        this.usersRepository = usersRepository;
        this.studentsService = studentsService;
        this.specialtiesService = specialtiesService;
        this.enrollmentsService = enrollmentsService;
    }
    async signUp(first_name, last_name, email, password, role, student = null, admin = null, specialty = null, subscribed = null) {
        const salt = (0, crypto_1.randomBytes)(8).toString('hex');
        const hash = (await scrypt(password, salt, 32));
        const newPassword = `${hash.toString('hex')}.${salt}`;
        const newUser = this.usersRepository.create();
        newUser.email = email;
        newUser.firstName = first_name;
        newUser.lastName = last_name;
        newUser.password = newPassword;
        if (role === Roles.STUDENT) {
            var spec = await this.specialtiesService.getSpecialtyByName(specialty);
            if (!spec) {
                throw new Error(`specialty not found`);
            }
            const newStudent = new create_student_dto_1.CreateStudentDto();
            newStudent.specialty = spec.name;
            newStudent.subscriber = subscribed;
            const createdStudent = await this.studentsService.createStudent(newStudent);
            await this.enrollmentsService.enrollStudent(createdStudent.id, spec.id);
        }
        if (!newUser) {
            throw new common_1.InternalServerErrorException('USER HAS NOT BEEN CREATED !!');
        }
        return await this.usersRepository.save(newUser);
    }
    async logIn(email, password) {
        const foundUser = await this.usersRepository.findOne({ where: { email } });
        if (!foundUser) {
            console.log('user not found');
            throw new common_1.NotFoundException("user dosn't exist in the data base . ");
        }
        const [storedHash, salt] = foundUser.password.split('.');
        const clientPassword = (await scrypt(password, salt, 32));
        if (foundUser.password === clientPassword.toString('hex')) {
            return `Welcome back${foundUser.firstName}${' '}${foundUser.lastName} `;
        }
        else {
            throw new common_1.UnauthorizedException('your email or password are wrong');
        }
    }
};
exports.Auth = Auth;
exports.Auth = Auth = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        students_service_1.StudentsService,
        specialties_service_1.SpecialtiesService,
        enrollments_service_1.EnrollmentsService])
], Auth);
//# sourceMappingURL=auth.service.js.map