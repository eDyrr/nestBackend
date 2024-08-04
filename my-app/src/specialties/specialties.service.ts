import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Specialties } from './entity/specialty.entity';
import { Specialty } from './entity/specialty.entity';

@Injectable()
export class SpecialtiesService {
    constructor(
        @InjectRepository(Specialty)
        private readonly specialtiesRepository: Repository<Specialty>,
    ) {}

    getAll(): string[] {
        return Object.values(Specialties) as string[] ;
    }

    async getSpecialtyById(id: number): Promise<Specialty> {
        try {
            const specialty: Specialty = await this.specialtiesRepository.findOneBy({ id }) ;
            return specialty ;
        }  catch(error) {
            console.error(error) ;
        }
    }

    async getSpecialtyByName(name: Specialties): Promise<Specialty> {
        try {
            const specialty: Specialty = await this.specialtiesRepository.findOne({ where: { name }}) ;
            
            if(!specialty) {
                throw new Error('specialty with the ${name} not found') ;
            }

            return specialty ;
        } catch(error) {
            throw new Error(error.message) ;
        }
    }
}
