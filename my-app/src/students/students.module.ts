import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entity/student.entity';
import { EnrollmentsModule } from 'src/enrollments/enrollments.module';
import { Specialties } from 'src/specialties/entity/specialty.entity';
import { SpecialtiesModule } from 'src/specialties/specialty.module';
import { ProgressModule } from 'src/progress/progress.module';

@Module({
  imports:[TypeOrmModule.forFeature([Student]), EnrollmentsModule, ProgressModule],
  providers: [StudentsService],
  controllers: [StudentsController]
})
export class StudentsModule {}
