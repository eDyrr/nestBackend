import { Repository } from 'typeorm';
import { Specialties } from './entity/specialty.entity';
import { Specialty } from './entity/specialty.entity';
import { CreateSpecialtyDTO } from './dto/create-specialty.dto';
import { _Module } from 'src/_modules/entity/module.entity';
export declare class SpecialtiesService {
    private readonly specialtyRepository;
    constructor(specialtyRepository: Repository<Specialty>);
    addSpecialty(specialtyName: string): void;
    createSpecialty(createdSpecialty: CreateSpecialtyDTO): Promise<Specialty>;
    getAll(): string[];
    getSpecialtyById(id: number): Promise<Specialty>;
    getSpecialtyByName(name: Specialties): Promise<Specialty>;
    getModules(specialty_id: number): Promise<_Module[]>;
}
