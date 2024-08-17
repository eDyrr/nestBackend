import {
    IsAlphanumeric,
    IsEmail,
    IsEnum,
    IsInt,
    IsNotEmpty,
    IsString,
    Matches,
    MinLength,
} from 'class-validator'

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8, 20}$/ ;

export class CreateUserDto {
    @IsString()
    @MinLength(2, { message: 'first name must have atleast 2 characters' })
    @IsNotEmpty()
    first_name: string ;

    @IsNotEmpty()
    @MinLength(3, { message: 'last name must have at least 3 characters' })
    last_name: string ;

    @IsNotEmpty()
    @IsEmail(null, { message: 'please provide a valid email' })
    email: string ;

    @IsNotEmpty()
    @Matches(passwordRegex, {
        message: `Password must contain Minimum 8 and maximum 20 characters,
        at least one uppercase letter,
        one lowercase letter,
        one number and one special character`,})
        password: string ;
}