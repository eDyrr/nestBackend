import { Admin } from "./entity/admin.entity";
import { Repository } from "typeorm";
export declare class AdminsService {
    private readonly adminRepository;
    constructor(adminRepository: Repository<Admin>);
    deleteModule(moduleId: number): Promise<void>;
    deleteChapter(): void;
}
