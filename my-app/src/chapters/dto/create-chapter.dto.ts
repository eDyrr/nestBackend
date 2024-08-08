import {
    IsBoolean,
    IsNotEmpty,
    IsNumber,
    IsString
} from 'class-validator'
import { Module } from './../../modules/entity/module.entity' ;


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
}