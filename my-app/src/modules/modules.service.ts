import { Injectable } from '@nestjs/common';
import { Module } from './entity/module.entity';
import { Chapter } from '../chapters/entity/chapter.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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

    createModule()
}
