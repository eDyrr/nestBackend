import { studies } from './entity/module.entity';
import { Chapter } from '../chapters/entity/chapter.entity';
import { Repository } from 'typeorm';
import { CreateModuleDTO } from './dto/create-module.dto';
export declare class ModulesService {
    private readonly moduleRepository;
    constructor(moduleRepository: Repository<studies.Module>);
    getAllModules(): Promise<studies.Module[]>;
    getModuleById(id: number): Promise<studies.Module>;
    createModule(createdModule: CreateModuleDTO): Promise<studies.Module>;
    addChapter(module_id: number, chapter: Chapter): Promise<studies.Module>;
}
