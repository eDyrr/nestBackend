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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const user_entity_1 = require("./entity/user.entity");
const user_entity_2 = require("./entity/user.entity");
const student_entity_1 = require("./../students/entity/student.entity");
let UsersService = class UsersService {
    constructor(userRepository, studentRepository) {
        this.userRepository = userRepository;
        this.studentRepository = studentRepository;
    }
    createUser(createUserDto) {
        const user = new user_entity_1.User();
        user.firstName = createUserDto.first_name;
        user.lastName = createUserDto.last_name;
        user.email = createUserDto.email;
        user.password = createUserDto.password;
        user.role = user_entity_2.Role.STUDENT;
        if (user.role === user_entity_2.Role.STUDENT) {
            user.student.enrollment;
            user.student.score;
            user.student.subscriber;
            this.studentRepository.save(user.student);
        }
        return this.userRepository.save(user);
    }
    findAll() {
        return this.userRepository.find();
    }
    findOne(id) {
        return this.userRepository.findOneBy({ id });
    }
    async remove(id) {
        await this.userRepository.delete(id);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_2.InjectRepository)(student_entity_1.Student)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map