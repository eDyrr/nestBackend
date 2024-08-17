import { forwardRef, Module } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { ModulesController } from './modules.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { studies } from './entity/module.entity';
import { ChaptersModule } from 'src/chapters/chapters.module';

@Module({
  imports:[TypeOrmModule.forFeature([studies.Module]), forwardRef(() => ChaptersModule)],
  providers: [ModulesService],
  controllers: [ModulesController]
})
export class ModulesModule {}