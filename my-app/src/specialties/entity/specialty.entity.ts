import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm' ;
import { Enrollment } from 'src/enrollments/entity/enrollment.entity';

export enum Specialties {
    'MATH',
    'SCIENCE',
    'CIVIL-ENGINEERING',
    'ELECTRICAL-ENGINEERING',
    'CHEMICAL-ENGINEERING',
    'LANGUAGES',
    'ECONOMICS',
    'LITERATURE & PHILOSOPHY',
}

@Entity('Specialty')
export class Specialty {
    @PrimaryGeneratedColumn()
    id: number ;

    @Column()
    name: Specialties ;

    @OneToMany(() => Enrollment, enrollment => enrollment.specialty)
    @JoinColumn()
    enrollments: Enrollment[] ;
}