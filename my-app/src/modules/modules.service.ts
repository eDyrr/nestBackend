import { Injectable } from '@nestjs/common';
import { studies } from './entity/module.entity';
import { Chapter } from '../chapters/entity/chapter.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateModuleDTO } from './dto/create-module.dto';

@Injectable()
export class ModulesService {
  constructor(
    @InjectRepository(studies.Module)
    private readonly moduleRepository: Repository<studies.Module>,
  ) {}

    getAllModules(): Promise<studies.Module[]> {
        return this.moduleRepository.find() ;
    }

    getModuleById(id: number): Promise<studies.Module> {
        return this.moduleRepository.findOneBy({id}) ;
    }

    async createModule(createdModule: CreateModuleDTO): Promise<studies.Module> {
      try {
        const module: studies.Module = this.moduleRepository.create() ;
        module.name = createdModule.name ;
        module.specialty = createdModule.specialty ;
        return this.moduleRepository.save(module) ;
      } catch(error) {
        throw new Error(error.message) ;
      }
    }

    async addChapter(module_id: number, chapter: Chapter): Promise<studies.Module> {
      try {
        const module: studies.Module = await this.getModuleById(module_id) ;

        if(!module) {
          throw new Error(`module with ID: ${module_id} not found`) ;
        }
        chapter.module = module ;
        module.chapters.push(chapter) ;
        return this.moduleRepository.save(module) ;

      } catch(error) {
        throw new Error(error.message) ;
      }
    }
}
