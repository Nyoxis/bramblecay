import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import { buildSchema } from 'type-graphql'
import { graphqlHTTP } from 'express-graphql'
import * as path from 'path'

import * as jwt from "express-jwt"

import { PrismaClient } from '@prisma/client'
//import UserResolver from './user-resolver'
import { resolvers } from '@generated/type-graphql'
const prisma = new PrismaClient()

async function bootstrap() {
  const schema = await buildSchema({
    resolvers,
    emitSchemaFile: path.resolve(__dirname, 'schema.gql')
  })

  const app = express()
  app.use(cors({
    origin: 'http://localhost:3000'
  }))
  
  app.use(  //graphql-express
    '/graphql',
    graphqlHTTP(async (request, response, graphQLParams) => ({
      schema: schema,
      graphiql: true,
      context: {
        prisma: prisma,
        user: request.user
      }
    })),
  )

  app.use(
    '/graphql',
    jwt({
      secret: "TypeGraphQL",
      credentialsRequired: false,
    }),
  )

  const port = 5000
  app.get('/', (request, response) => {
    response.send(`
      <div>Hello world!</div>
      <pre>${JSON.stringify(schema, null, 4)}</pre>`)
  })
  app.listen(port, () => console.log(`Running on port ${port}`))

}

bootstrap()