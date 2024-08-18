import { forwardRef, Module } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { ModulesController } from './modules.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { _Module } from './entity/module.entity';
import { ChaptersModule } from 'src/chapters/chapters.module';

@Module({
  imports:[TypeOrmModule.forFeature([_Module]), forwardRef(() => ChaptersModule)],
  providers: [ModulesService],
  controllers: [ModulesController]
})
export class _ModulesModule {}