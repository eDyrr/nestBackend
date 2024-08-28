import { forwardRef, Module } from '@nestjs/common';
import { ModulesModule } from 'src/_modules/_modules.module';

@Module({
    imports:[forwardRef(() => ModulesModule)]
})
export class ChaptersModule {}
