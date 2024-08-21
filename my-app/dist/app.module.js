"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const students_module_1 = require("./students/students.module");
const specialty_module_1 = require("./specialties/specialty.module");
const chapters_module_1 = require("./chapters/chapters.module");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./users/entity/user.entity");
const admin_entity_1 = require("./admins/entity/admin.entity");
const student_entity_1 = require("./students/entity/student.entity");
const progress_module_1 = require("./progress/progress.module");
const modules_module_1 = require("./modules/modules.module");
const problems_module_1 = require("./problems/problems.module");
const admins_module_1 = require("./admins/admins.module");
const enrollments_module_1 = require("./enrollments/enrollments.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mariadb',
                host: 'localhost',
                port: 3306,
                username: 'eDD',
                password: '7355608',
                database: 'bac',
                entities: [user_entity_1.User, admin_entity_1.Admin, student_entity_1.Student],
                synchronize: true,
            }),
            students_module_1.StudentsModule, specialty_module_1.SpecialtiesModule, chapters_module_1.ChaptersModule, progress_module_1.ProgressModule, modules_module_1._ModulesModule, enrollments_module_1.EnrollmentsModule, problems_module_1.ProblemsModule, admins_module_1.AdminsModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map