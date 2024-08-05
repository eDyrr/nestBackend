import { SpecialtiesService } from './specialties.service';
import { Specialty } from './entity/specialty.entity';
export declare class SpecialtiesController {
    private specialtiesService;
    constructor(specialtiesService: SpecialtiesService);
    getAllSpecialties(): Specialty[];
}
