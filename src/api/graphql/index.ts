import 'reflect-metadata'
import * as path from 'path'
import { buildSchema, AuthChecker } from 'type-graphql'

import UserResolver from './user-resolver'
import PostCRUDResolver from './post-CRUD-resolver'
import UserCRUDResolver from './user-CRUD-resolver'

import { ContextType } from '../graphqlService'

const authChecker: AuthChecker<ContextType> = (
  { root, args, context, info },
  roles,
) => {
  if (context.getUser()) return true
  else return false
  // here we can read the user from context
  // and check his permission in the db against the `roles` argument
  // that comes from the `@Authorized` decorator, eg. ["ADMIN", "MODERATOR"]
}
async function generate () {
  const schema = await buildSchema({
    resolvers: [UserResolver, UserCRUDResolver, PostCRUDResolver],
    authChecker,
    emitSchemaFile: path.resolve(__dirname, 'schema.gql')
  })
  
  return schema
}

export default generate
export { type ContextType }

