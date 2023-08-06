import TransactionService from "../../service/TransactionService"


const TransactionResolver = {
    Query:{
        getTransactions(){

            return TransactionService.getTransaction();

        }
    },

    Mutation: {
        createTransaction(parent:any, args:any){
            return TransactionService.createTransaction(args.id, args.input)
        },

        deleteTransaction(parent:any, args:any){
            return TransactionService.deleteTransaction(args.id)
        }
    }
}

export default TransactionResolver;