import {
    IsBoolean,
    IsNotEmpty,
    IsNumber,
    IsString,
    ValidateNested
} from 'class-validator'
import { _Module } from './../../_modules/entity/module.entity' ;
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
    @Type(() => _Module)
    module: _Module ;
}