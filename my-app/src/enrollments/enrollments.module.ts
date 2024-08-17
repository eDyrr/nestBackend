import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Enrollment } from "./entity/enrollment.entity";
import { EnrollmentsService } from "./enrollments.service";

@Module({
    imports:[TypeOrmModule.forFeature([Enrollment])],
    providers:[EnrollmentsService],
})

export class EnrollmentsModule{}