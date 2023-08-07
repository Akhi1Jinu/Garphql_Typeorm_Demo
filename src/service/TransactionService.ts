import { UserData } from "../DataSource/DataSource";
import { Transactions, TransactionType } from "../Entity/Transactions";
import { User } from "../Entity/User";


class TransactionService {
    public static async createTransaction(id:any , args:any) {

        console.log(id, args.client_id)

        const tran = UserData.getRepository(Transactions)
        const user = UserData.getRepository(User)

        const user_find = await user.findOne({where:{id: id}})

        const data = await tran.save(args)

        if(!user_find){
           throw new Error("User is not found") 
        }

        if (args.type === TransactionType.DEPOSIT) {
            user_find.balance = user_find?.balance + args.amount;
            user_find.transactions = [data]
        } else {
            user_find.balance = user_find?.balance ? user_find?.balance - args.amount:0;
            user_find.transactions = [data]

        }
        
        await user.save(user_find); 

        return user_find;
    }


    public static async getTransaction(){
        const tran = UserData.getRepository(Transactions)
        const datas = await tran.find()
        return datas;
    }


    public static async deleteTransaction(id: any){
        const tran = UserData.getRepository(Transactions)
        const datas = await tran.delete(id)
        return "Transaction deleted";
    }
}

export default TransactionService;