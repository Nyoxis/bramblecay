import 'reflect-metadata'
import express from 'express'
import { buildSchema } from 'type-graphql'
import { graphqlHTTP } from 'express-graphql'

import RecipeResolver from './recipe'
async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [RecipeResolver],
  });

  const app = express()

  app.use(  //graphql-express
    '/graphql',
    graphqlHTTP(async (request, response, graphQLParams) => ({
      schema: schema,
      graphiql: true,
    })),
  )

  const port = 5000
  app.get('/', (request, response) => {
    response.send('Hello world!')
  })
  app.listen(port, () => console.log(`Running on port ${port}`))

}

bootstrap()