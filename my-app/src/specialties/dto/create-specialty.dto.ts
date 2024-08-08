import { IsNotEmpty, IsString } from "class-validator";

export class CreateSpecialtyDTO {
    @IsNotEmpty()
    @IsString()
    name: string ;
}