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
      return this. ;
  }

  getModuleById(id: number): Module {
    return this.modulesRepository.find(id);
  }

  createModule(name: string, roadmap: Chapter[]): Module {
    const module: Module = {
      id,
      name,
      roadmap,
    };

    this.modulesRepository.save(module);
    return module;
  }

  deleteModule(id: number) {
    const module: _Module = this.getModuleById(id);
    if (module) {
      this.modules.filter((module) => module.id !== id);
    }
  }
}
