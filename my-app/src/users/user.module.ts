import { Module } from '@nestjs/common';
import { StudentsController } from './users.controller';
import { StudentsService } from './users.service';

export class Student {
  id: number ;
  firstName: string ;
  lastName: string ;
  email: string ;
  password: string ;
  score: number ;
  role: 'STUDENT' | 'ADMIN' ;
}

@Module({
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule {}
