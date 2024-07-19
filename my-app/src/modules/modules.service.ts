import { Injectable } from '@nestjs/common';
import { _Module } from './modules.module';
import { Chapter } from 'src/chapters/chapters.module';

@Injectable()
export class ModulesService {
    modules: _Module[] = [] ;

    getAllModules(): _Module[] {
        return this.modules ;
    }

    getModuleById(id: number): _Module {
        return this.modules.find((module) => module.id === id) ;
    }

    createModule(name: string, roadmap: Chapter[]): _Module {
        const id: number = this.modules.length + 1 ;
        const module: _Module = {
            id,
            name,
            roadmap
        } ;

        this.modules.push(module) ;
        return module ;
    }

    deleteModule(id: number): void {
        this.modules.filter((module) => module.id !== id) ;
    }

    
}
