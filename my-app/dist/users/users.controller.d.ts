import { UsersService } from './users.service';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    findUser(id: string): Promise<User>;
    removeUser(id: string): Promise<void>;
}
