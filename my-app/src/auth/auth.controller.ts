import { Body, Controller, Post } from '@nestjs/common';
import { Roles } from './auth.service';
import { Auth } from './auth.service';
@Controller('/auth')
export class AuthController {
  constructor(private readonly AuthServ: Auth) {}
  @Post('/singUp')
  singUp(
    @Body('first_name') first_name: string,
    @Body('last_name') last_name: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('Roles') Roles: Roles,
  ) {
    return this.AuthServ.signUp(first_name, last_name, email, password, Roles);
  }
}
