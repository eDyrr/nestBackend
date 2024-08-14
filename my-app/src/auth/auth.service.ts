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
import { StudentsService } from 'src/students/students.service';
import { SpecialtiesService } from 'src/specialties/specialties.service';
import { Specialties } from 'src/specialties/entity/specialty.entity';
import { CreateStudentDto } from 'src/students/dto/create-student.dto';
import { EnrollmentsService } from 'src/enrollments/enrollments.service';

const scrypt = promisify(_scrypt);
//Table of users only for test
export enum Roles {
  ADMIN = 'admin',
  STUDENT = 'STUDENT',
}
@Injectable()
export class Auth {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
    private readonly studentsService: StudentsService,
    private readonly specialtiesService: SpecialtiesService,
    private readonly enrollmentsService: EnrollmentsService,
  ) {}
  //EDD WHEN YOU ARE DONE FIXING YOUR ENTITY JUST CHANGE THE VALUES  IN THE CREATE METHOD
  //TODO mokhttar add tests to prevent existing emails.
  async signUp(
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    role: Roles,
    student: Student = null, 
    admin: Admin = null,
    specialty: Specialties = null,
    subscribed: boolean = null,
  ): Promise<User> {
    //generat Salt.
    const salt = randomBytes(8).toString('hex');
    //generate a hash .
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    //join the salt with the password using a seperator.
    const newPassword = `${hash.toString('hex')}.${salt}`;
    //TODO fix the entity so this will work correctly
    const newUser = this.usersRepository.create() ;

    newUser.email = email ;
    newUser.firstName = first_name ;
    newUser.lastName = last_name ;
    newUser.password = newPassword ;

    if(role === Roles.STUDENT) {
      var spec = await this.specialtiesService.getSpecialtyByName(specialty) ;

      if(!spec) {
        throw new Error(`specialty not found`) ;
      }

      const newStudent: CreateStudentDto = new CreateStudentDto() ;
      
      newStudent.specialty = spec.name ;
      newStudent.subscriber = subscribed ;

      
      const createdStudent = await this.studentsService.createStudent(newStudent) ;
      await this.enrollmentsService.enrollStudent(createdStudent.id, spec.id) ;
    }
    //it a create function so we dont need to await the result
    if (!newUser) {
      throw new InternalServerErrorException('USER HAS NOT BEEN CREATED !!');
    }
    return await this.usersRepository.save(newUser) ;
  }

  //TODO  mokhttar after the entity gets fixed add  handlin sessions,signout,cookies managment
  async logIn(email: string, password: string) {
    const foundUser = await this.usersRepository.findOne({ where: { email } });
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
