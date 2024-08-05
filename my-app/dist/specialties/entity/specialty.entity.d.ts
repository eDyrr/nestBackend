import { Enrollment } from 'src/enrollments/entity/enrollment.entity';
export declare enum Specialties {
    'MATH' = 0,
    'SCIENCE' = 1,
    'CIVIL-ENGINEERING' = 2,
    'ELECTRICAL-ENGINEERING' = 3,
    'CHEMICAL-ENGINEERING' = 4,
    'LANGUAGES' = 5,
    'ECONOMICS' = 6,
    'LITERATURE & PHILOSOPHY' = 7
}
export declare class Specialty {
    id: number;
    name: Specialties;
    enrollments: Enrollment[];
}
