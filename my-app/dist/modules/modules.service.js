"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModulesService = void 0;
const common_1 = require("@nestjs/common");
let ModulesService = class ModulesService {
    constructor() {
        this.modules = [];
    }
    getAllModules() {
        return this.modules;
    }
    getModuleById(id) {
        return this.modules.find((module) => module.id === id);
    }
    createModule(name, roadmap) {
        const id = this.modules.length + 1;
        const module = {
            id,
            name,
            roadmap
        };
        this.modules.push(module);
        return module;
    }
    deleteModule(id) {
        const module = this.getModuleById(id);
        if (module) {
            this.modules.filter((module) => module.id !== id);
        }
    }
};
exports.ModulesService = ModulesService;
exports.ModulesService = ModulesService = __decorate([
    (0, common_1.Injectable)()
], ModulesService);
//# sourceMappingURL=modules.service.js.map