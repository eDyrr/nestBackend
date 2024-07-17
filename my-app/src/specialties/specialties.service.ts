import { Injectable } from '@nestjs/common';
import { Specialty } from './specialty.module' ;

@Injectable()
export class SpecialtiesService {
    private specialties: Specialty[] = [] ;

    getAllSpecialties(): Specialty[] {
        return this.specialties ;
    }

    getSpecialtyById(id: number): Specialty {
        return this.specialties.find((specialty) => specialty.id === id) ;
    }
}
