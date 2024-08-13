import {
    IsBoolean,
    IsNotEmpty,
    ValidateNested,
} from 'class-validator'
import { Specialties } from 'src/specialties/entity/specialty.entity'

export class CreateStudentDto {
    @IsNotEmpty()
    @ValidateNested()
    specialty: Specialties;

    @IsNotEmpty()
    @IsBoolean()
    subscriber: boolean ;
}