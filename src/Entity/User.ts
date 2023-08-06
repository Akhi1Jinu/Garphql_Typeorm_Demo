import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany} from 'typeorm'
import { Transactions } from "./Transactions"


@Entity('user-data')
export class User {

    @PrimaryGeneratedColumn("uuid")
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


    @Column({
		type: 'int',
        nullable: true
	})
	balance?: number


    @CreateDateColumn()
    created_at!: Date

	@UpdateDateColumn()
	updated_at: Date | undefined

    
    @OneToMany(
		() => Transactions,
		(transaction) => transaction.user
	)
    transactions?: Transactions[];


}