import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity} from 'typeorm'

@Entity('Banker')
export class Banker  {
    
    @PrimaryGeneratedColumn("uuid")
    id?: number 

    @Column({
        type: 'varchar',
         nullable: false
        })
    firstName!: string 

    @Column({
        type: 'varchar',
        nullable: true
    })
    lastName : string | any

    @Column({
        type: 'int',
        nullable:true
    })
    age!: number 


    @Column({
        type: 'varchar',
		unique: true,
	})
	employeeNumber: string | undefined;


}