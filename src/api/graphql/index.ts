import 'reflect-metadata'
import { fileURLToPath } from 'url'
import { buildSchema, AuthChecker } from 'type-graphql'

import UserResolver from './user-resolver'
import PostCRUDResolver from './post-CRUD-resolver'
import UserCRUDResolver from './user-CRUD-resolver'

import { ContextType } from '../graphqlService'

const authChecker: AuthChecker<ContextType> = (
  { root, args, context, info },
  roles,
) => {
  if (!roles.length && !!context.getUser()) return true
  if (roles.some(role => role === context.getUser().kind)) return true
  else return false
  // here we can read the user from context
  // and check his permission in the db against the `roles` argument
  // that comes from the `@Authorized` decorator, eg. ["ADMIN", "MODERATOR"]
}

const schema = buildSchema({
  resolvers: [UserResolver, UserCRUDResolver, PostCRUDResolver],
  authChecker,
  emitSchemaFile: fileURLToPath(new URL('schema.gql', import.meta.url)),
})

export default schema
export { type ContextType }

