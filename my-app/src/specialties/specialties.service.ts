import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Specialties } from './entity/specialty.entity';
import { Specialty } from './entity/specialty.entity';
import { CreateSpecialtyDTO } from './dto/create-specialty.dto';
import { Module } from 'src/modules/entity/module.entity';

@Injectable()
export class SpecialtiesService {
    constructor(
        @InjectRepository(Specialty)
        private readonly specialtiesRepository: Repository<Specialty>,
    ) {}

    addSpecialty(specialtyName: string) {
        if(!(specialtyName in Specialties)) {
            (Specialties as any)[specialtyName] = specialtyName ;
        }
    }

    async createSpecialty(createdSpecialty: CreateSpecialtyDTO): Promise<Specialty> {
        try {
            const specialty: Specialty = this.specialtiesRepository.create() ;
            specialty.name = (Specialties as any)[createdSpecialty.name] ;
            this.addSpecialty(createdSpecialty.name) ;
            this.specialtiesRepository.save(specialty) ;
            return specialty ;
        } catch(error) {
            throw new Error(error.message) ;
        }
    }

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
                throw new Error(`specialty with the ${name} not found`) ;
            }

            return specialty ;
        } catch(error) {
            throw new Error(error.message) ;
        }
    }

    async getModules(specialty_id: number): Promise<Module[]> {
        try {
            const specialty: Specialty = await this.getSpecialtyById(specialty_id) ;
            if(!specialty) {
                throw new Error(`specialty with ID: ${specialty_id} not found`) ;
            }

            return specialty.modules ;
        } catch(error) {
            throw new Error(error.message) ;
        }
    }
}