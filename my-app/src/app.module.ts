import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { SpecialtiesModule } from './specialties/specialties.module';
import { ChaptersModule } from './chapters/chapters.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entity/user.entity';
import { Admin } from './admins/entity/admin.entity';
import { Student } from './students/entity/student.entity';
import { ProgressModule } from './progress/progress.module';
import { ProblemsModule } from './problems/problems.module';
import { AdminsModule } from './admins/admins.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';
import { Chapter } from './chapters/entity/chapter.entity';
import { _Module } from './_modules/entity/module.entity';
import { Problem } from './problems/entity/problem.entity';
import { Solution } from './solutions/entity/solution.entity';
import { Specialty } from './specialties/entity/specialty.entity';
import { Progress } from './progress/entity/progress.entity';
import { Enrollment } from './enrollments/entity/enrollment.entity';
import { ModulesModule } from './_modules/_modules.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'eDyrr',
      password: '7355608',
      database: 'bac',
      entities: [User, Admin, Student, Chapter, _Module, Problem, Solution, Specialty, Progress, Enrollment],
      synchronize: true,
    }),
    StudentsModule, SpecialtiesModule, ChaptersModule, ProgressModule, ModulesModule, EnrollmentsModule, ProblemsModule, AdminsModule, ModulesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
