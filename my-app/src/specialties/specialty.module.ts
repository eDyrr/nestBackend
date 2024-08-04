import { Module } from '@nestjs/common';
import { SpecialtiesController } from './specialties.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpecialtiesService } from './specialties.service';
import { Specialty } from './entity/specialty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Specialty])],
  controllers: [SpecialtiesController],
  providers: [SpecialtiesService]
})
export class SpecialtiesModule {}
