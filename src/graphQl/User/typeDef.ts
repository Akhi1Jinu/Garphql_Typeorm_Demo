export const userTypeDef = `

type User {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int!
    balance: String!
}

input UserInput {
    firstName: String!
    lastName: String!
    age: Int!
    balance: String!
}

input updateUser {
    id: Int!
    firstName: String!
    lastName: String!
    age: Int!
}

type Query {
    greet: String!
    getUsers: [User]
    getUser(Id: Int!): User
}

type Mutation {
    createUser(input:UserInput): User
    updateUser(newData: updateUser): String!
    deleteUser(userId: Int!): String!
}

schema {
    query: Query
    mutation: Mutation
}

`