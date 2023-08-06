import { getBanker, getBankers, insertBanker, deleteBanker } from "../../service/BankerService"


const BankResolver = {
    Query:{
        getBanker(parent: any, args: any){
                return getBanker(args.id);
        },

        getBankers(){
            return getBankers();
        }

    },

    Mutation:{
        createBanker(parent:any, args:any){
            return insertBanker(args.input);
        },

        deleteBanker(parent:any, args:any){
            const data =  deleteBanker(args.bankerId);

            return data
        }
    }
}

export default BankResolver;