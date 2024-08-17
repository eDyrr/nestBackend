import { forwardRef, Module } from '@nestjs/common';
import { User } from './entity/user.entity' ;
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Admin } from 'src/admins/entity/admin.entity';
@Module({
  imports:[TypeOrmModule.forFeature([User]), forwardRef(() => Admin)],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
