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
exports.ModulesService = void 0;
const common_1 = require("@nestjs/common");
const module_entity_1 = require("./entity/module.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ModulesService = class ModulesService {
    constructor(modulesRepository) {
        this.modulesRepository = modulesRepository;
    }
    getAllModules() {
        return this.modulesRepository.find();
    }
    getModuleById(id) {
        return this.modulesRepository.findOneBy({ id });
    }
    async createModule(createdModule) {
        try {
            const module = this.modulesRepository.create();
            module.name = createdModule.name;
            module.specialty = createdModule.specialty;
            return this.modulesRepository.save(module);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async addChapter(module_id, chapter) {
        try {
            const module = await this.getModuleById(module_id);
            if (!module) {
                throw new Error(`module with ID: ${module_id} not found`);
            }
            chapter.module = module;
            module.chapters.push(chapter);
            return this.modulesRepository.save(module);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
exports.ModulesService = ModulesService;
exports.ModulesService = ModulesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(module_entity_1.Module)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ModulesService);
//# sourceMappingURL=modules.service.js.map