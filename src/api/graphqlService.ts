import fastifyPlugin from 'fastify-plugin'
import mercurius from 'mercurius'

import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const context = async function (request: FastifyRequest, reply: FastifyReply) {
  // Return an object that will be available in your GraphQL resolvers
  return {
    prisma: request.prisma,
    getUser: () => request.user,
    logout: () => request.logOut(),
  }
}
const schemadir = resolve(__dirname, '../graphql/schema.gql')
const schema = readFileSync(schemadir).toString('utf-8')
const graphqlService: FastifyPluginAsync = async (fastify) => {
  fastify.register(mercurius, {
    path: '/api/graphql',
    schema,
    context: context
  })
}

  //extract Context type from promise
export type ContextType = Awaited<ReturnType<typeof context>>
export default fastifyPlugin(graphqlService)