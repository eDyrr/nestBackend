import { forwardRef, Module } from '@nestjs/common';
import { User } from './entity/user.entity' ;
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Admin } from '../admins/entity/admin.entity';
import { StudentsModule } from 'src/students/students.module';
@Module({
  imports:[TypeOrmModule.forFeature([User]), forwardRef(() => Admin), forwardRef(() => StudentsModule)],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
