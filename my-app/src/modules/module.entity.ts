import { Column, Entity, JoinColumn, PrimaryGeneratedColumn } from 'typeorm' ;


@Entity()
export class Module {
    @PrimaryGeneratedColumn()
    id: number ;

    @Column()
    name: string ;

    @Column()
    specialty_id: number ;
    @OneToOne()
    @JoinColumn()
}