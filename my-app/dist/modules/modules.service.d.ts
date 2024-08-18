import { _Module } from './entity/module.entity';
import { Chapter } from '../chapters/entity/chapter.entity';
import { Repository } from 'typeorm';
import { CreateModuleDTO } from './dto/create-module.dto';
export declare class ModulesService {
    private readonly moduleRepository;
    constructor(moduleRepository: Repository<_Module>);
    getAllModules(): Promise<_Module[]>;
    getModuleById(id: number): Promise<_Module>;
    createModule(createdModule: CreateModuleDTO): Promise<_Module>;
    addChapter(module_id: number, chapter: Chapter): Promise<_Module>;
}
