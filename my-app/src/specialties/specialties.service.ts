import { Injectable } from '@nestjs/common';
import { Specialty } from './specialty.module' ;
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Specialties } from './entity/specialty.entity';
@Injectable()
export class SpecialtiesService {
    constructor(
        @InjectRepository(Specialty)
        private readonly specialtiesService: Repository<Specialty>,
    ) {}

    getAll(): string[] {
        return Object.values(Specialties) as string[] ;
    }

    async getSpecialtyById(id: number): Promise<string> {
        try {
            const specialty: Specialty = await this.specialtiesService.findOneBy({ id }) ;
            return specialty.name ;
        }  catch(error) {
            console.error(error) ;
        }
    }
}
