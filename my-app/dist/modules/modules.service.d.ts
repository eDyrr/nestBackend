import { Module } from './entity/module.entity';
import { Chapter } from '../chapters/entity/chapter.entity';
import { Repository } from 'typeorm';
export declare class ModulesService {
    private readonly modulesRepository;
    constructor(modulesRepository: Repository<Module>);
    getAllModules(): Promise<Module[]>;
    getModuleById(id: number): Module;
    createModule(name: string, roadmap: Chapter[]): Module;
    deleteModule(id: number): void;
}
