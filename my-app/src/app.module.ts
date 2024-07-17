import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/student.module';
import { SpecialtiesModule } from './specialties/specialty.module';

@Module({
  imports: [StudentsModule, SpecialtiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
