import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm' ;

@Entity()
export class Specialty {
    @PrimaryGeneratedColumn()
    id: number ;

    @Column()
    name: string ;
}