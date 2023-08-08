import { UserData } from "../DataSource/DataSource";
import { Transactions, TransactionType } from "../Entity/Transactions";
import { User } from "../Entity/User";


class TransactionService {
    public static async createTransaction(id: any, args: any) {

        console.log(id, args.client_id)

        const tran = UserData.getRepository(Transactions)
        const userRepo = UserData.getRepository(User)

        const user = await userRepo.findOne({ where: { id: id } })

        await tran.save({
            amount: args.amount,
            type: args.type,
            user: id
        }
        );


        if (!user) {
            throw new Error("User is not found")
        }

        if (args.type === TransactionType.DEPOSIT) {
            user.balance = user?.balance + args.amount;
        } else {
            user.balance = user?.balance ? user?.balance - args.amount : 0;

        }

        await userRepo.save(user);

        return user;
    }

    public static async transactionDone(id: any) {
        const transactionRepo = UserData.getRepository(Transactions)
        const userRepo = UserData.getRepository(User)

        const user = await userRepo.findOne({ where: { id: id } })




        if (!user) {
            throw new Error("User is not found")
        }

        const transactionCountQuery = transactionRepo.createQueryBuilder()
            .select('COUNT(*)', 'transactionCount')
            .where('client_id = :clientId', { clientId: id })
            .getRawOne();

        const { transactionCount } = await transactionCountQuery;

        console.log('Transaction Count:', transactionCount);

        return {
            name: user?.firstName,
            transactions: transactionCount,
            balance: user.balance
        }

    }


    public static async getTransaction() {
        const tran = UserData.getRepository(Transactions)
        const datas = await tran.find()
        return datas;
    }


    public static async deleteTransaction(id: any) {
        const tran = UserData.getRepository(Transactions)
        const datas = await tran.delete(id)
        return "Transaction deleted";
    }
}

export default TransactionService;