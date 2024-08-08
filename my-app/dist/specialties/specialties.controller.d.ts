import { SpecialtiesService } from './specialties.service';
export declare class SpecialtiesController {
    private specialtiesService;
    constructor(specialtiesService: SpecialtiesService);
    getAllSpecialties(): string[];
}
