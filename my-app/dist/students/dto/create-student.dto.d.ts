import { Specialties } from 'src/specialties/entity/specialty.entity';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
export declare class CreateStudentDto extends CreateUserDto {
    specialty: Specialties;
    subscriber: boolean;
}
