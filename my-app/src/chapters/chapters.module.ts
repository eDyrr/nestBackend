import { forwardRef, Module } from '@nestjs/common';
import { ChaptersController } from './chapters.controller';
import { ChaptersService } from './chapters.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chapter } from './entity/chapter.entity';
import { _Module } from 'src/modules/entity/module.entity';
import { _ModulesModule } from 'src/modules/modules.module';

@Module({
  imports:[TypeOrmModule.forFeature([Chapter]), forwardRef(() => _ModulesModule)],
  controllers: [ChaptersController],
  providers: [ChaptersService]
})
export class ChaptersModule {}
