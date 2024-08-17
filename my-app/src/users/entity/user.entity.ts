import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, TableInheritance } from "typeorm";
import { Student } from "../../students/entity/student.entity";
import { Admin } from '../../admins/entity/admin.entity' ;

export enum Role {
    STUDENT = "STUDENT",
    ADMIN = "ADMIN"
}

@Entity()
@TableInheritance({ column: {type: "varchar", name: "type"}})
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
        enum: Role
    })
    role: Role ;

    @OneToOne(() => Student, { nullable: true })
    @JoinColumn()
    student?: Student ;

    // @OneToOne(() => Admin, { nullable: true })
    // @JoinColumn()
    // admin?: Admin ;
}