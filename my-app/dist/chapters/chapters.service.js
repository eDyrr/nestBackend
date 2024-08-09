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
exports.ChaptersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const chapter_entity_1 = require("./entity/chapter.entity");
const modules_service_1 = require("../modules/modules.service");
let ChaptersService = class ChaptersService {
    constructor(chaptersRepository, modulesService) {
        this.chaptersRepository = chaptersRepository;
        this.modulesService = modulesService;
    }
    findAll() {
        return this.chaptersRepository.find();
    }
    findById(id) {
        return this.chaptersRepository.findOneBy({ id });
    }
    async createChapter(createdChapter, module_id) {
        try {
            const module = await this.modulesService.getModuleById(module_id);
            if (!module) {
                throw new Error(`module with ID: ${module_id} not found`);
            }
            const chapter = this.chaptersRepository.create();
            chapter.title = createdChapter.title;
            chapter.is_paid = createdChapter.paid;
            chapter.order = createdChapter.order;
            chapter.module = module;
            return this.chaptersRepository.save(chapter);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
exports.ChaptersService = ChaptersService;
exports.ChaptersService = ChaptersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(chapter_entity_1.Chapter)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        modules_service_1.ModulesService])
], ChaptersService);
//# sourceMappingURL=chapters.service.js.map