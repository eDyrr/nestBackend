import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { Student } from './../students/entity/student.entity';
export declare class UsersService {
    private readonly userRepository;
    private readonly studentRepository;
    constructor(userRepository: Repository<User>, studentRepository: Repository<Student>);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    remove(id: number): Promise<void>;
}
