import { Controller, Get } from '@nestjs/common';
import { SpecialtiesService } from './specialties.service';
import { Specialty } from './specialty.module' ;
@Controller('specialties')
export class SpecialtiesController {
    constructor(private specialtiesService: SpecialtiesService) {}

    @Get()
    getAllSpecialties(): Specialty[] {
        return this.specialtiesService.getAllSpecialties() ;
    }
}
