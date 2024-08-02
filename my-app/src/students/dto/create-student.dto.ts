import {
    IsBoolean,
    IsNotEmpty
} from 'class-validator'
import { Specialties } from 'src/specialties/entity/specialty.entity'

export class CreateStudentDto {
    @IsNotEmpty()
    specialty: Specialties;

    @IsNotEmpty()
    @IsBoolean()
    subscriber: boolean ;
}