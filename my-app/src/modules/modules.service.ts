import { Injectable } from '@nestjs/common';
import { Module } from './entity/module.entity';
import { Chapter } from '../chapters/entity/chapter.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateModuleDTO } from './dto/create-module.dto';

@Injectable()
export class ModulesService {
  constructor(
    @InjectRepository(Module)
    private readonly modulesRepository: Repository<Module>,
  ) {}

    getAllModules(): Promise<Module[]> {
        return this.modulesRepository.find() ;
    }

    getModuleById(id: number): Promise<Module> {
        return this.modulesRepository.findOneBy({id}) ;
    }

    async createModule(createdModule: CreateModuleDTO): Promise<Module> {
      try {
        const module: Module = this.modulesRepository.create() ;
        module.name = createdModule.name ;
        module.specialty = createdModule.specialty ;
        return this.modulesRepository.save(module) ;
      } catch(error) {
        throw new Error(error.message) ;
      }
    }

    async addChapter(module_id: number, chapter: Chapter): Promise<Module> {
      try {
        const module: Module = await this.getModuleById(module_id) ;

        if(!module) {
          throw new Error(`module with ID: ${module_id} not found`) ;
        }
        chapter.module = module ;
        module.chapters.push(chapter) ;
        return this.modulesRepository.save(module) ;

      } catch(error) {
        throw new Error(error.message) ;
      }
    }
}
