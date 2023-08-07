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
    client_id: String!
}


input TransactionInput {
    type:String!
    amount: Int!
    client_id: String!
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