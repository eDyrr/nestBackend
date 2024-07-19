import { Module } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { ModulesController } from './modules.controller';
import { Chapter } from 'src/chapters/chapters.module';

export class _Module {
  id: number ;
  name: string ;
  roadmap: Chapter[] ;
}

@Module({
  providers: [ModulesService],
  controllers: [ModulesController]
})
export class ModulesModule {}