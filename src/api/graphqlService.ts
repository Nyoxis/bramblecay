import fastifyPlugin from 'fastify-plugin'
import mercurius from 'mercurius'
import MercuriusGQLUpload from 'mercurius-upload'
import { createWriteStream } from 'fs'
import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify'
import util from 'util'
import stream from 'stream'
import schema from './graphql'

const context = async function (request: FastifyRequest, reply: FastifyReply) {
  // Return an object that will be available in your GraphQL resolvers
  return {
    prisma: request.prisma,
    getUser: () => request.user,
    logout: () => request.logOut(),
    revalidate: () => reply.nextRender('posts/some%20text%20in%20json'),
    pipeline: util.promisify(stream.pipeline),
    createWriteStream,
  }
}

const graphqlService: FastifyPluginAsync = async (fastify) => {
  const schemaFile = await schema
  fastify.register(MercuriusGQLUpload)
  fastify.register(mercurius, {
    path: '/api/graphql',
    graphiql: true,
    schema: schemaFile,
    context,
    //validationRules: process.env.NODE_ENV === 'production' && [NoSchemaIntrospectionCustomRule],
  })
}

  //extract Context type from promise
export type ContextType = Awaited<ReturnType<typeof context>>
export default fastifyPlugin(graphqlService)