import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { Auth } from './auth.service';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [Auth],
  exports: [],
})
export class AuthModule {}
