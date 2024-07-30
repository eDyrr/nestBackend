import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { Role } from './entity/user.entity';
import { Student } from './../students/entity/student.entity' ;

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(Student)
        private readonly studentRepository: Repository<Student>,
    ) {}
    createUser(createUserDto: CreateUserDto): Promise<User> {
        const user: User = new User() ;
        
        user.firstName = createUserDto.first_name ;
        user.lastName = createUserDto.last_name ;
        user.email = createUserDto.email ;
        user.password = createUserDto.password ;
        user.role = Role.STUDENT ;
        
        if(user.role === Role.STUDENT) {
            
            user.student.enrollment ;
            user.student.score ;
            user.student.subscriber ;

            this.studentRepository.save(user.student) ;
        }
        return this.userRepository.save(user) ;
    }

    findAll(): Promise<User[]> {
        return this.userRepository.find() ;
    }

    findOne(id: number): Promise<User> {
        return this.userRepository.findOneBy({ id }) ;
    }

    async remove(id: number): Promise<void> {
        await this.userRepository.delete(id) ;
    }
}
