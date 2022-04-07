import fastifyPlugin from 'fastify-plugin'
import mercurius from 'mercurius'

import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify'

import schema from './graphql'

const context = async function (request: FastifyRequest, reply: FastifyReply) {
  // Return an object that will be available in your GraphQL resolvers
  return {
    prisma: request.prisma,
    getUser: () => request.user,
    logout: () => request.logOut(),
  }
}

const graphqlService: FastifyPluginAsync = async (fastify) => {
  fastify.register(mercurius, {
    path: '/api/graphql',
    graphiql: true,
    schema: await schema(),
    context,
    //validationRules: process.env.NODE_ENV === 'production' && [NoSchemaIntrospectionCustomRule],
  })
}

  //extract Context type from promise
export type ContextType = Awaited<ReturnType<typeof context>>
export default fastifyPlugin(graphqlService)