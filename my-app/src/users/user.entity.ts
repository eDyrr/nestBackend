import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Student } from "./../students/student.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number ;

    @Column()
    firstName: string ;

    @Column()
    lastName: string ;
    
    @Column()
    email: string ;

    @Column()
    password: string ;

    @Column()
    role: string ;

    @OneToOne(() => Student, student => student.user)
    student: Student ;
}