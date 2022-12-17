import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity('user-data')
export class User {

    @PrimaryGeneratedColumn({
        type: 'int'
    })
    id: number | any

    @Column({
        type: 'varchar',
         nullable: false
        })
    firstName: string | any

    @Column({
        type: 'varchar',
        nullable: true
    })
    lastName : string | any

    @Column({
        type: 'int',
        nullable: true
    })
    age: number | any
}