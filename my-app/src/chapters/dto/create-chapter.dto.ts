import {
    IsNotEmpty
} from 'class-validator'
import { Module } from './../../modules/entity/module.entity' ;


export class CreateChapterDto {
    @IsNotEmpty()
    
    @IsNotEmpty()
    title: string ;
}