import fastifyPlugin from 'fastify-plugin'
import { buildSchema } from 'type-graphql'
import mercurius from 'mercurius'
import * as path from 'path'

import { resolvers } from '@generated/type-graphql'
import UserResolver from './user-resolver'
import { customAuthChecker} from '../auth/authPlugin'

import { FastifyPluginAsync, FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'

const context = async function (request: FastifyRequest, reply: FastifyReply) {
  // Return an object that will be available in your GraphQL resolvers
  return {
    prisma: request.prisma,
    getUser: () => request.user,
    logout: () => request.logOut(),
  }
}

const graphqlService: FastifyPluginAsync = async (fastify) => {
  const schema = await buildSchema({
    resolvers: [...resolvers, UserResolver],
    authChecker: customAuthChecker,
    emitSchemaFile: path.resolve(__dirname, 'schema.gql')
  })

  fastify.register(mercurius, {
    path: '/api/graphql',
    schema,
    context: context
  })
}
//extract Context type from promise
export type ContextType = Awaited<ReturnType<typeof context>>
export default fastifyPlugin(graphqlService)