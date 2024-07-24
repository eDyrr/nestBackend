import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { User } from './../users/user.entity'

@Entity()
export class Student extends User{
    @Column()
    user_id: number ;

    @Column()
    subscriber: boolean ;
    
    @Column()
    score: number ;

    @OneToOne(() => User, user => user.student)
    @JoinColumn({name: 'user_id'})
    user: User ;
}