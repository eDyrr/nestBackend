import { Module } from '@nestjs/common';
import { ProblemsController } from './problems/problems.controller';

@Module({
  controllers: [ProblemsController]
})
export class ProblemsModule {}
