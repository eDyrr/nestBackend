import { IsEnum, IsNotEmpty, IsNumber, IsOptional, ValidateNested } from "class-validator";
import { Difficulty } from "../entity/problem.entity";
import { _Module } from "src/_modules/entity/module.entity";
import { Solution } from "src/solutions/entity/solution.entity";
import { Type } from "class-transformer";

export class ProblemDTO {
    @IsNotEmpty()
    @IsNumber()
    score: number ;
    
    @IsNotEmpty()
    @IsEnum(Difficulty)
    difficulty: Difficulty ;

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => _Module)
    module: _Module ;

    @IsOptional()
    @Type(() => Solution)
    solution?: Solution ;
}