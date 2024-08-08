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
const scrypt = (0, util_1.promisify)(crypto_1.scrypt);
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "admin";
    Roles["STUDENT"] = "STUDENT";
})(Roles || (exports.Roles = Roles = {}));
let Auth = class Auth {
    constructor(usersRepo) {
        this.usersRepo = usersRepo;
    }
    async signUp(first_name, last_name, email, password, role, studnet, admin) {
        const salt = (0, crypto_1.randomBytes)(8).toString('hex');
        const hash = (await scrypt(password, salt, 32));
        const newPassword = `${hash.toString('hex')}.${salt}`;
        const newUser = this.usersRepo.create({
            firstName: first_name,
            lastName: last_name,
            email: email,
            password: newPassword,
            role: null,
        });
        if (!newUser) {
            throw new common_1.InternalServerErrorException('USER HAS NOT BEEN CREATED !!');
        }
        else {
            return newUser;
        }
    }
    async logIn(email, password) {
        const foundUser = await this.usersRepo.findOne({ where: { email } });
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
    __metadata("design:paramtypes", [typeorm_2.Repository])
], Auth);
//# sourceMappingURL=auth.service.js.map