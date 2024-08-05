import { _Module } from './modules.module';
import { Chapter } from 'src/chapters/chapters.module';
export declare class ModulesService {
    modules: _Module[];
    getAllModules(): _Module[];
    getModuleById(id: number): _Module;
    createModule(name: string, roadmap: Chapter[]): _Module;
    deleteModule(id: number): void;
}
