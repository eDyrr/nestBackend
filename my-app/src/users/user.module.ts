import { Module } from '@nestjs/common';
import { StudentsController } from './users.controller';
import { StudentsService } from './users.service';

export class User {
  id: number ;
  firstName: string ;
  lastName: string ;
  email: string ;
  password: string ;
  role: 'ADMIN' ;
}

export class Student extends User {
  score: number ;
}

@Module({
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule {}
