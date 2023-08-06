import UserResolver from "./User/resolver";
import BankResolver from "./Banker/resolver"
import TransactionResolver from "./Transactions/resolver"


export const resolvers = [UserResolver, BankResolver, TransactionResolver];