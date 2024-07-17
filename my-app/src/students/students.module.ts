import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';

export class Student {
  id: number ;
  firstName: string ;
  lastName: string ;
  email: string ;
  password: string ;
  score: number ;  
}

@Module({
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule {}
