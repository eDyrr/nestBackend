import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entity/user.entity' ;
import { CreateUserDto } from './dto/create-user.dto' ;

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    // @Post()
    // createUser(@Body() createUserDto: CreateUserDto) {
    //     return this.usersService.createUser(createUserDto) ;
    // }

    @Get()
    getAllUsers() {
        return this.usersService.findAll() ;
    }

    @Get(':id')
    findUser(@Param('id') id: string) {
        return this.usersService.findOne(+id) ;
    }

    // @Delete(':id')
    // removeUser(@Param('id') id: string) {
    //     return this.usersService.remove(+id) ;
    // }
}
