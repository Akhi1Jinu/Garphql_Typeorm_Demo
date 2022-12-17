import express from 'express'
import { UserData } from './DataSource/DataSource'
import { graphqlHTTP } from 'express-graphql'
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs } from "./graphQl/typeDef";
import { resolvers } from "./graphQl/resolver";

const main = () => {
    UserData.initialize()
        .then(() => console.log('connected with the database'))
        .catch((err) => console.log(err))

    const app = express()

    const excecutableSchema = makeExecutableSchema({
        typeDefs: typeDefs,
        resolvers: resolvers
    })

    app.use('/graphql', graphqlHTTP({
        schema : excecutableSchema,
        graphiql: true
    })
    )

    app.listen(3000 , () => console.log('localhost:3000'))
}

main()
