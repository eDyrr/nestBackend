import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chapter } from './entity/chapter.entity';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { Module } from 'src/modules/entity/module.entity';
import { ModulesService } from 'src/modules/modules.service';

@Injectable()
export class ChaptersService {
    constructor(
        @InjectRepository(Chapter)
        private readonly chaptersRepository: Repository<Chapter>,
        private readonly modulesService: ModulesService
    ) {}

    findAll(): Promise<Chapter[]> {
        return this.chaptersRepository.find() ;
    }

    findById(id: number): Promise<Chapter> {
        return this.chaptersRepository.findOneBy({ id }) ;
    }

    async createChapter(createdChapter: CreateChapterDto, module_id: number): Promise<Chapter> {
        try {
            const module: Module = await this.modulesService.getModuleById(module_id) ;
            if (!module) {
                throw new Error(`module with ID: ${module_id} not found`) ;
            }

            const chapter: Chapter = this.chaptersRepository.create() ;

            chapter.title = createdChapter.title ;
            chapter.is_paid = createdChapter.paid ;
            chapter.order = createdChapter.order ;

            chapter.module = module ;

            return this.chaptersRepository.save(chapter) ;
        } catch(error) {
            throw new Error(error.message) ;
        }
    }

    async deleteChapter(chapter_id: number) {
        try {
            const chapter = await this.findById(chapter_id) ;

            if(!chapter) {
                throw new Error(`chapter with ID: ${chapter_id} not found`) ;
            }

            this.chaptersRepository.delete(chapter) ;
            
        } catch(error) {
            throw new Error(error.message) ;
        }
    }
}
