import { Injectable } from "@nestjs/common";
import { Admin } from "./entity/admin.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { _Module } from "src/_modules/entity/module.entity";
import { Chapter } from "src/chapters/entity/chapter.entity";

@Injectable()
export class AdminsService {
    constructor(
        @InjectRepository(Admin)
        private readonly adminRepository: Repository<Admin>
    ) {}

    // async createModule(): Promise<_Module> {}

    async deleteModule(moduleId: number) {}

    // async addChapter(moduleId: number, chapter: Chapter): Promise<Chapter> {}

    deleteChapter() {}


}