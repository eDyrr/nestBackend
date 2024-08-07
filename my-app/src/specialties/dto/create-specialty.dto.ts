import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { Specialties } from "../entity/specialty.entity";

export class CreateSpecialtyDTO {
    @IsNotEmpty()
    @IsEnum(Specialties)
    name: Specialties ;
}