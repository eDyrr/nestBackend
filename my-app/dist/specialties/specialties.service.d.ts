import { Repository } from 'typeorm';
import { Specialties } from './entity/specialty.entity';
import { Specialty } from './entity/specialty.entity';
export declare class SpecialtiesService {
    private readonly specialtiesRepository;
    constructor(specialtiesRepository: Repository<Specialty>);
    getAll(): string[];
    getSpecialtyById(id: number): Promise<Specialty>;
    getSpecialtyByName(name: Specialties): Promise<Specialty>;
}
