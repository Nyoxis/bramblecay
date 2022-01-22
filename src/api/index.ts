import 'reflect-metadata'
import express from 'express'
import cors from 'cors'

const app = express()
const port = 5000  //to env

import graphqlServer from './graphqlServer'
import passportInitialize from './passportInitialize'

async function bootstrap() {

  app.use(cors({
    origin: ['http://localhost:3000', 'https://studio.apollographql.com'] //to env
  }))

  graphqlServer(app)
  passportInitialize(app)

  app.get('/', (request, response) => { //dev
    response.send(`
      <div>Hello world!</div>
    `)
  })

  app.listen(port, () => console.log(`Running on port ${port}`))
}

bootstrap()