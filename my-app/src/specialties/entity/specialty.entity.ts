import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm' ;
import { Enrollment } from 'src/enrollments/entity/enrollment.entity';
import { _Module } from 'src/_modules/entity/module.entity';

export const Specialties = {
    MATH: 'MATH',
    SCIENCE: 'SCIENCE',
    CIVIL_ENGINEERING: 'CIVIL-ENGINEERING',
    ELECTRICAL_ENGINEERING: 'ELECTRICAL-ENGINEERING',
    CHEMICAL_ENGINEERING: 'CHEMICAL-ENGINEERING',
    LANGUAGES: 'LANGUAGES',
    ECONOMICS: 'ECONOMICS',
    LITERATURE_PHILOSOPHY: 'LITERATURE & PHILOSOPHY',
} as const ;

export type Specialties = typeof Specialties[keyof typeof Specialties] ;
@Entity('Specialty')
export class Specialty {
    @PrimaryGeneratedColumn()
    id: number ;

    @Column({ 
        type: 'enum',
        enum: Specialties,
    })
    name: Specialties ;

    @OneToMany(() => Enrollment, enrollment => enrollment.specialty)
    @JoinColumn()
    enrollments: Enrollment[] ;

    @OneToMany(() => _Module, module => module.specialty)
    modules: _Module[] ;
}