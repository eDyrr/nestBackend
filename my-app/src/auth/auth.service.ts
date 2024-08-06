import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { Role, User } from 'src/users/entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin, Repository } from 'typeorm';
import { promisify } from 'util';
import { Student } from 'src/students/entity/student.entity';
const scrypt = promisify(_scrypt);
//Table of users only for test
export enum Roles {
  ADMIN = 'admin',
  STUDENT = 'STUDENT',
}
@Injectable()
export class Auth {
  constructor(
    @InjectRepository(User) private readonly usersRepo: Repository<User>,
  ) {}
  //EDD WHEN YOU ARE DONE FIXING YOUR ENTITY JUST CHANGE THE VALUES  IN THE CREATE METHOD
  //TODO mokhttar add tests to prevent existing emails.
  async signUp(
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    role: Roles,
    studnet: Student,
    admin: Admin,
  ): Promise<User> {
    //generat Salt.
    const salt = randomBytes(8).toString('hex');
    //generate a hash .
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    //join the salt with the password using a seperator.
    const newPassword = `${hash.toString('hex')}.${salt}`;
    //TODO fix the entity so this will work correctly
    const newUser = this.usersRepo.create({
      firstName: first_name,
      lastName: last_name,
      email: email,
      password: newPassword,
      role: null, //TODO we will fix it
      // student: studnet,
      //admin: admin,
    });
    //it a create function so we dont need to await the result
    if (!newUser) {
      throw new InternalServerErrorException('USER HAS NOT BEEN CREATED !!');
    } else {
      return newUser;
    }
  }

  //TODO  mokhttar after the entity gets fixed add  handlin sessions,signout,cookies managment
  async logIn(email: string, password: string) {
    const foundUser = await this.usersRepo.findOne({ where: { email } });
    if (!foundUser) {
      console.log('user not found');
      throw new NotFoundException("user dosn't exist in the data base . ");
    }
    //extracting the salt
    const [storedHash, salt] = foundUser.password.split('.');
    const clientPassword = (await scrypt(password, salt, 32)) as Buffer;

    if (foundUser.password === clientPassword.toString('hex')) {
      return `Welcome back${foundUser.firstName}${' '}${foundUser.lastName} `;
    } else {
      throw new UnauthorizedException('your email or password are wrong');
    }
  }
}
