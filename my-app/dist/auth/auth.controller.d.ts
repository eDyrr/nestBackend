import { Roles } from './auth.service';
import { Auth } from './auth.service';
export declare class AuthController {
    private readonly AuthServ;
    constructor(AuthServ: Auth);
    singUp(first_name: string, last_name: string, email: string, password: string, Roles: Roles): Promise<void>;
}
