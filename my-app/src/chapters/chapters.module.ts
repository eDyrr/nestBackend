import { forwardRef, Module } from '@nestjs/common';
import { ChaptersController } from './chapters.controller';
import { ChaptersService } from './chapters.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chapter } from './entity/chapter.entity';
import { _Module } from 'src/modules/entity/module.entity';
import { ModulesModule } from 'src/modules/modules.module';

@Module({
  imports:[TypeOrmModule.forFeature([Chapter]), forwardRef(() => ModulesModule)],
  controllers: [ChaptersController],
  providers: [ChaptersService]
})
export class ChaptersModule {}
