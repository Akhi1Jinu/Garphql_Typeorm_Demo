export const bankeTypeDef = `

type Banker {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int!
    employeeNumber: String!
}

input BankerInput {
    firstName: String!
    lastName: String!
    age: Int!
    employeeNumber: String!
}


type Query {
    getBankers: [Banker]
    getBanker(Id: Int!): Banker
}

type Mutation {
    createBanker(input:BankerInput): String!
    deleteBanker(bankerId: String!): String!
}

schema {
    query: Query
    mutation: Mutation
}


`