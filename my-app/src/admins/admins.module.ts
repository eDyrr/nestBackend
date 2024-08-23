import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { Admin } from 'typeorm';
import { AdminsService } from './admins.service';

@Module({
    // imports:[TypeOrmModule.forFeature([Admin]), forwardRef(() => UsersModule)],
    // providers:[AdminsService]
})
export class AdminsModule {}
