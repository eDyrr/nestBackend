import { IsNotEmpty } from "class-validator";
import { Specialty } from "src/specialties/entity/specialty.entity";

export class CreateModuleDTO {
    @IsNotEmpty()
    name: string ;

    @IsNotEmpty()
    specialty: Specialty ;
}