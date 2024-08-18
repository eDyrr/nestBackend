import { Module, forwardRef } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Enrollment } from "./entity/enrollment.entity";
import { EnrollmentsService } from "./enrollments.service";
import { SpecialtiesModule } from "src/specialties/specialty.module";
import { StudentsModule } from "src/students/students.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([Enrollment]),
    SpecialtiesModule,
    forwardRef(() => StudentsModule),
  ],
  providers: [EnrollmentsService],
  exports: [EnrollmentsService], // Export the EnrollmentsService to be used by other modules
})
export class EnrollmentsModule {}
