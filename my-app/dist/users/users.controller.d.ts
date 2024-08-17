import { UsersService } from './users.service';
import { User } from './entity/user.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUsers(): Promise<User[]>;
    findUser(id: string): Promise<User>;
}
