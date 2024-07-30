import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Student } from "../../students/entity/student.entity";
import { Admin } from '../../admins/entity/admin.entity' ;

export enum Role {
    STUDENT = "STUDENT",
    ADMIN = "ADMIN"
}

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

    @Column({
        type: "enum",
        enum: "Role"
    })
    role: Role ;

    @OneToOne(() => Student, student => student.user, { nullable: true})
    @JoinColumn()
    student: Student ;

    @OneToOne(() => Admin, admin => admin.user, { nullable: true })
    @JoinColumn()
    admin: Admin ;
}