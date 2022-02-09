import 'reflect-metadata'
import Fastify from 'fastify'

import graphqlService from './graphqService'
import fastifyCors from 'fastify-cors'
import authPlugin from './auth/authPlugin'

const app = Fastify({
  logger: true
})
const port = 5000  //to env
const site = 'http://localhost:3000'

const start = async () => {
  app.register(fastifyCors, { 
    origin: site
  })
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