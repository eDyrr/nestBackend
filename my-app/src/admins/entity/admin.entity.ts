import { ChildEntity, Column } from 'typeorm' ;
import { User } from '../../users/entity/user.entity' ;

@ChildEntity()
export class Admin extends User {
    @Column('simple-array')
    permissions: string[] ;
}