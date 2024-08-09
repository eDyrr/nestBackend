import { IsEnum, IsNotEmpty, IsNumber, IsOptional, Validate } from "class-validator";
import { Difficulty } from "../entity/problem.entity";
import { Module } from "src/modules/entity/module.entity";
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
    @Type(() => Module)
    module: Module ;

    @IsOptional()
    @Type(() => Solution)
    solution?: Solution ;
}