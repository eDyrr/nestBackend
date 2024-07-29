import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './users/users.module';
import { SpecialtiesModule } from './specialties/specialty.module';
import { ChaptersModule } from './chapters/chapters.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Admin } from './admins/admin.entity';
import { Student } from './students/entity/student.entity';

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
    StudentsModule, SpecialtiesModule, ChaptersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
