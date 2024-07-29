import { Entity, Column, OneToOne, JoinColumn } from 'typeorm' ;
import { User } from './../users/entity/user.entity' ;

Entity()
export class Admin {
    @Column()
    user_id: number ;

    @OneToOne(() => User, user => user.admin)
    @JoinColumn()
    user: User ;
}