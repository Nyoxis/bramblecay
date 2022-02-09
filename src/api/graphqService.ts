import fastifyPlugin from 'fastify-plugin'
import { buildSchema } from 'type-graphql'
import mercurius from 'mercurius'
import * as path from 'path'

import { PrismaClient } from '@prisma/client'

import { resolvers } from '@generated/type-graphql'
import UserResolver from './user-resolver'
import { customAuthChecker} from './auth/authPlugin'

import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify'

const prisma = new PrismaClient()
const context = async (request: FastifyRequest, reply: FastifyReply) => {
  // Return an object that will be available in your GraphQL resolvers
  return {
    prisma: prisma,
    getUser: () => request.user,
    logout: () => request.logout(),
  }
}

const graphqlService: FastifyPluginAsync = async (fastify) => {
  const schema = await buildSchema({
    resolvers: [...resolvers, UserResolver],
    authChecker: customAuthChecker,
    emitSchemaFile: path.resolve(__dirname, 'schema.gql')
  })

  fastify.register(mercurius, {
    schema,
    context: context
  })
  
}
type UnboxPromise<T extends Promise<any>> = T extends Promise<infer U> ? U: never;
export type СontextType = UnboxPromise<ReturnType<typeof context>>
//wrapping is not necessary
export default fastifyPlugin(graphqlService)