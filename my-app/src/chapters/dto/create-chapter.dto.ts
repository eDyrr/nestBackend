import {
    IsBoolean,
    IsNotEmpty,
    IsNumber,
    IsString,
    ValidateNested
} from 'class-validator'
import { studies } from './../../modules/entity/module.entity' ;
import { Type } from 'class-transformer';


export class CreateChapterDto {
    @IsNotEmpty()
    @IsBoolean()
    paid: boolean ;

    @IsNotEmpty()
    @IsString()
    title: string ;

    @IsNotEmpty()
    @IsNumber()
    order: number ;

    @ValidateNested()
    @Type(() => studies.Module)
    module: studies.Module ;
}