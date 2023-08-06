import { Entity, Column, PrimaryGeneratedColumn , ManyToOne, JoinColumn} from "typeorm";
import { Banker } from "./Banker";
import { User } from "./User"

export enum TransactionType {
    DEPOSIT = 'deposit',
    WITHDRAW = 'withdraw',
}


@Entity("Transactions")
export class Transactions {

    @PrimaryGeneratedColumn("uuid")
    id!: number

    @Column({
        type: "enum",
        enum: TransactionType
    })
    type?: string

    @Column()
    amount!: number


    @ManyToOne(
        () => User,
        (user) => user.transactions,
        {
            onDelete: 'CASCADE'
        } 
    )   
    @JoinColumn({
		name: 'client_id',
	})
	user?: User;


}