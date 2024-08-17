import { ChildEntity, OneToOne, JoinColumn } from 'typeorm' ;
import { User } from '../../users/entity/user.entity' ;

@ChildEntity()
export class Admin extends User {
    
}