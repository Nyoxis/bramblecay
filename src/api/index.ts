import Fastify from 'fastify'
import nextjs from '@fastify/nextjs'
import fastifyStatic from '@fastify/static'
import prismaClient from 'fastify-prisma-client'
import { fileURLToPath } from 'url'

import graphqlService from './graphql'
import authPlugin from './passport'
import config from '../config'
const app = Fastify({
  logger: false
})

const start = async () => {
  /*
  app.register(fastifyCors, {
    credentials: true,
    origin: site
  })
  */
  app.register(nextjs, { dev: config.NODE_ENV })
    .after(() => {
      app.next('/*')
    })
  app.register(prismaClient)
  app.register(graphqlService)
  app.register(authPlugin)
  app.register(fastifyStatic, {
    root: fileURLToPath(new URL(`../public/`, import.meta.url)),
    prefix: '/public/', // optional: default '/'
  })
  try {
    //localhost
    await app.listen({ port: config.PORT })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()