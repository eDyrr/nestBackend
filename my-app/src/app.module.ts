import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './users/user.module';
import { SpecialtiesModule } from './specialties/specialty.module';
import { ChaptersModule } from './chapters/chapters.module';

@Module({
  imports: [StudentsModule, SpecialtiesModule, ChaptersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
