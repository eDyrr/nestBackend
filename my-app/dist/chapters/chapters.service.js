"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChaptersService = void 0;
const common_1 = require("@nestjs/common");
let ChaptersService = class ChaptersService {
    constructor() {
        this.chapters = [];
    }
    getAllChapter() {
        return this.chapters;
    }
    getChapterById(id) {
        return this.chapters.find((chapter) => chapter.id === id);
    }
    createChapter(order, title, summary) {
        const id = this.chapters.length + 1;
        const chapter = {
            id,
            order,
            title,
            summary
        };
        this.chapters.push(chapter);
        return chapter;
    }
    deleteChapter(id) {
        const _chapter = this.getChapterById(id);
        if (_chapter) {
            this.chapters = this.chapters.filter((chapter) => chapter.id !== id);
        }
    }
};
exports.ChaptersService = ChaptersService;
exports.ChaptersService = ChaptersService = __decorate([
    (0, common_1.Injectable)()
], ChaptersService);
//# sourceMappingURL=chapters.service.js.map