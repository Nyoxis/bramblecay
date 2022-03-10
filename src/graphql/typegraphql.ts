import 'reflect-metadata'
import { buildSchema, AuthChecker } from 'type-graphql'
import UserResolver from './user-resolver'
import PostCRUDResolver from './post-CRUD-resolver'
import UserCRUDResolver from './user-CRUD-resolver'
import * as path from 'path'

import { ContextType } from '../api/graphqlService'

const customAuthChecker: AuthChecker<ContextType> = (
  { root, args, context, info },
  roles,
) => {
  if (context.getUser()) return true
  else return false
  // here we can read the user from context
  // and check his permission in the db against the `roles` argument
  // that comes from the `@Authorized` decorator, eg. ["ADMIN", "MODERATOR"]
}

buildSchema({
  resolvers: [UserResolver, UserCRUDResolver, PostCRUDResolver],
  authChecker: customAuthChecker,
  emitSchemaFile: path.resolve(__dirname, 'schema.gql')
})

export { type ContextType }

