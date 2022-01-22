import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server-express'
import * as path from 'path'

import { PrismaClient } from '@prisma/client'

import { resolvers } from '@generated/type-graphql'
import UserResolver from './user-resolver'
import { Application } from 'express'

const prisma = new PrismaClient()

async function graphqlServer(app: Application) {
  const schema = await buildSchema({
    resolvers: [...resolvers, UserResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql')
  })

  const server = new ApolloServer({
    schema: schema,
    context: ({ req }) => ({
      prisma: prisma,
      getUser: () => req.user,
      logout: () => req.logout(),
    }),
  })

  await server.start()
  server.applyMiddleware({ app })
}

export default graphqlServer