import Fastify from 'fastify'
import nextjs from '@fastify/nextjs'
import fastifyCors from '@fastify/cors'
import fastifyStatic from '@fastify/static'
import prismaClient from 'fastify-prisma-client'
import { fileURLToPath } from 'url'

import graphqlService from './graphqlService'
import authPlugin from './auth/authPlugin'
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
  app.register(nextjs, { dev: false })
    .after(() => {
      app.next('/api/revalidate', async (app, req, res) => {
        console.log('hello')
        // Check for secret to confirm this is a valid request
        if (req.query.secret !== config.REVALIDATION_TOKEN) {
          return res.status(401).json({ message: 'Invalid token' })
        }
        
        try {
          // this should be the actual path not a rewritten path
          // e.g. for "/blog/[slug]" this should be "/blog/post-1"
          req.
          await app.revalidate('/posts/bold')
          return res.json({ revalidated: true })
        } catch (err) {
          // If there was an error, Next.js will continue
          // to show the last successfully generated page
          return res.status(500).send('Error revalidating')
        }
      })
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