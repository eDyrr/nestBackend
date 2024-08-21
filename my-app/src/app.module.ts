import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { SpecialtiesModule } from './specialties/specialty.module';
import { ChaptersModule } from './chapters/chapters.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entity/user.entity';
import { Admin } from './admins/entity/admin.entity';
import { Student } from './students/entity/student.entity';
import { ProgressModule } from './progress/progress.module';
import { _ModulesModule } from './modules/modules.module';
import { ProblemsModule } from './problems/problems.module';
import { AdminsModule } from './admins/admins.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'eDD',
      password: '7355608',
      database: 'bac',
      entities: [User, Admin, Student],
      synchronize: true,
    }),
    StudentsModule, SpecialtiesModule, ChaptersModule, ProgressModule, _ModulesModule, EnrollmentsModule, ProblemsModule, AdminsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
