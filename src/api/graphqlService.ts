import fastifyPlugin from 'fastify-plugin'
import mercurius from 'mercurius'
import MercuriusGQLUpload from 'mercurius-upload'
import { createWriteStream } from 'fs'
import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify'
import util from 'util'
import stream from 'stream'
import ky from 'ky';
import schema from './graphql'
import config from './../config'

const context = async function (request: FastifyRequest, reply: FastifyReply) {
  // Return an object that will be available in your GraphQL resolvers
  return {
    prisma: request.prisma,
    getUser: () => request.user,
    logout: () => request.logOut(),
    revalidate: async () => {
      console.log('all fine for now')
      const page = await ky.get('http://localhost:5000/api/revalidate', { searchParams: { secret: 'token' } } )
      console.log(page.url)
    },
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