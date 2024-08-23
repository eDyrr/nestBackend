import { forwardRef, Module } from '@nestjs/common';
import { _ModulesModule } from 'src/modules/modules.module';

@Module({
    imports:[forwardRef(() => _ModulesModule)]
})
export class ChaptersModule {}
