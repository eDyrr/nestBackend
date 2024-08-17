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
exports.SpecialtiesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const specialty_entity_1 = require("./entity/specialty.entity");
const specialty_entity_2 = require("./entity/specialty.entity");
let SpecialtiesService = class SpecialtiesService {
    constructor(specialtyRepository) {
        this.specialtyRepository = specialtyRepository;
    }
    addSpecialty(specialtyName) {
        if (!(specialtyName in specialty_entity_1.Specialties)) {
            specialty_entity_1.Specialties[specialtyName] = specialtyName;
        }
    }
    async createSpecialty(createdSpecialty) {
        try {
            const specialty = this.specialtyRepository.create();
            specialty.name = specialty_entity_1.Specialties[createdSpecialty.name];
            this.addSpecialty(createdSpecialty.name);
            this.specialtyRepository.save(specialty);
            return specialty;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    getAll() {
        return Object.values(specialty_entity_1.Specialties);
    }
    async getSpecialtyById(id) {
        try {
            const specialty = await this.specialtyRepository.findOneBy({ id });
            return specialty;
        }
        catch (error) {
            console.error(error);
        }
    }
    async getSpecialtyByName(name) {
        try {
            const specialty = await this.specialtyRepository.findOne({ where: { name } });
            if (!specialty) {
                throw new Error(`specialty with the ${name} not found`);
            }
            return specialty;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async getModules(specialty_id) {
        try {
            const specialty = await this.getSpecialtyById(specialty_id);
            if (!specialty) {
                throw new Error(`specialty with ID: ${specialty_id} not found`);
            }
            return specialty.modules;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
exports.SpecialtiesService = SpecialtiesService;
exports.SpecialtiesService = SpecialtiesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(specialty_entity_2.Specialty)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SpecialtiesService);
//# sourceMappingURL=specialties.service.js.map