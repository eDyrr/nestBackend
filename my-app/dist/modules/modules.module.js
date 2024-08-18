"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._ModulesModule = void 0;
const common_1 = require("@nestjs/common");
const modules_service_1 = require("./modules.service");
const modules_controller_1 = require("./modules.controller");
const typeorm_1 = require("@nestjs/typeorm");
const module_entity_1 = require("./entity/module.entity");
const chapters_module_1 = require("../chapters/chapters.module");
let _ModulesModule = class _ModulesModule {
};
exports._ModulesModule = _ModulesModule;
exports._ModulesModule = _ModulesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([module_entity_1._Module]), (0, common_1.forwardRef)(() => chapters_module_1.ChaptersModule)],
        providers: [modules_service_1.ModulesService],
        controllers: [modules_controller_1.ModulesController]
    })
], _ModulesModule);
//# sourceMappingURL=modules.module.js.map