import { Enrollment } from 'src/enrollments/entity/enrollment.entity';
import { Module } from 'src/modules/entity/module.entity';
export declare const Specialties: {
    readonly MATH: "MATH";
    readonly SCIENCE: "SCIENCE";
    readonly CIVIL_ENGINEERING: "CIVIL-ENGINEERING";
    readonly ELECTRICAL_ENGINEERING: "ELECTRICAL-ENGINEERING";
    readonly CHEMICAL_ENGINEERING: "CHEMICAL-ENGINEERING";
    readonly LANGUAGES: "LANGUAGES";
    readonly ECONOMICS: "ECONOMICS";
    readonly LITERATURE_PHILOSOPHY: "LITERATURE & PHILOSOPHY";
};
export type Specialties = typeof Specialties[keyof typeof Specialties];
export declare class Specialty {
    id: number;
    name: Specialties;
    enrollments: Enrollment[];
    modules: Module[];
}
