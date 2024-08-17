import { forwardRef, Module } from "@nestjs/common";
import { User } from "src/users/entity/user.entity";

@Module({
    imports:[forwardRef(() => User)],
    controllers:[],
    providers:[],
})
export class AdminsModule {}
