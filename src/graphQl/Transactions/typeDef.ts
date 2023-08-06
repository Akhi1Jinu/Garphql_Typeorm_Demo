export const transactionTypeDef =  `


type User {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int!
    balance: String!
}

type Transaction {
    id: ID!
    type:String!
    amount: Int!
    clientid: String!
}


input TransactionInput {
    type:String!
    amount: Int!
}


type Query {

    getTransactions: [Transaction] 
}

type Mutation { 
    createTransaction(id:String! , input:TransactionInput): User
    deleteTransaction(id: String!): String!
}

schema {
    query: Query
    mutation: Mutation
}

` 