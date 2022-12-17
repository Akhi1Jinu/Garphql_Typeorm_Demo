import UserService from "../../service/UserService";

const UserResolver = {
    Query: {
        greet(){
            return UserService.greet();
        },
        getUsers(){
            return UserService.sendUsers()
        },
        getUser(parent: any, args: any, context: any){
            return UserService.sendUser(args.Id);
        }
    },
    Mutation: {
        createUser(parent: any, args:any, context:any ){
            return UserService.insertUser(args.input);
        },
        updateUser(parant: any, args: any, context: any){
            return UserService.sendData(args.newData);
        },
        deleteUser(parent: any, args: any, context:any){
            return UserService.dataDelete(args.userId)
        }
    }
}

export default UserResolver;