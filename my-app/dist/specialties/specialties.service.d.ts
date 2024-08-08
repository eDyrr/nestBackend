import { Repository } from 'typeorm';
import { Specialties } from './entity/specialty.entity';
import { Specialty } from './entity/specialty.entity';
import { CreateSpecialtyDTO } from './dto/create-specialty.dto';
export declare class SpecialtiesService {
    private readonly specialtiesRepository;
    constructor(specialtiesRepository: Repository<Specialty>);
    addSpecialty(specialtyName: string): void;
    createSpecialty(createdSpecialty: CreateSpecialtyDTO): Promise<Specialty>;
    getAll(): string[];
    getSpecialtyById(id: number): Promise<Specialty>;
    getSpecialtyByName(name: Specialties): Promise<Specialty>;
}
