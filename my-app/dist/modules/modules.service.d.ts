import { Module } from './entity/module.entity';
import { Chapter } from '../chapters/entity/chapter.entity';
import { Repository } from 'typeorm';
import { CreateModuleDTO } from './dto/create-module.dto';
export declare class ModulesService {
    private readonly modulesRepository;
    constructor(modulesRepository: Repository<Module>);
    getAllModules(): Promise<Module[]>;
    getModuleById(id: number): Promise<Module>;
    createModule(createdModule: CreateModuleDTO): Promise<Module>;
    addChapter(module_id: number, chapter: Chapter): Promise<Module>;
}
