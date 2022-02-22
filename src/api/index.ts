import { PrismaClient } from '@prisma/client';
import 'reflect-metadata'
import Fastify from 'fastify'
import nextjs from 'fastify-nextjs'
import prismaClient from 'fastify-prisma-client'

import graphqlService from './graphql/graphqlService'
import fastifyCors from 'fastify-cors'
import authPlugin from './auth/authPlugin'


const app = Fastify({
  logger: true
})
const port = 5000  //to env
const site = 'http://localhost:3000'

const start = async () => {
  /*
  app.register(fastifyCors, {
    credentials: true,
    origin: site
  })
  */
  app.register(nextjs)
    .after(() => {
      app.next('/')
      app.next('/user')
      app.next('/login')
      app.next('/editor')
    })
  app.register(prismaClient)
  app.register(graphqlService)
  app.register(authPlugin)
  try {
    //localhost
    await app.listen(port)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()