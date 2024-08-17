import {
    IsBoolean,
    IsNotEmpty,
    ValidateNested,
} from 'class-validator'
import { Specialties } from 'src/specialties/entity/specialty.entity'
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export class CreateStudentDto extends CreateUserDto {
    @IsNotEmpty()
    @ValidateNested()
    specialty: Specialties;

    @IsNotEmpty()
    @IsBoolean()
    subscriber: boolean ;
}