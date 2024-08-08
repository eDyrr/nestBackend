import { Controller, Get } from '@nestjs/common';
import { SpecialtiesService } from './specialties.service';
import { Specialty } from './entity/specialty.entity' ;

@Controller('specialties')
export class SpecialtiesController {
    constructor(private specialtiesService: SpecialtiesService) {}

    @Get()
    getAllSpecialties(): string[] {
        return this.specialtiesService.getAll() ;
    }
}
