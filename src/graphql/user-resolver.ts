import {
  Resolver,
  Query,
  Mutation,
  Ctx,
  Authorized,
} from 'type-graphql'

import { User } from '@generated/type-graphql'
import { ContextType } from './typegraphql'

@Resolver()
class UserResolvers {
  @Authorized()
  @Query(() => User)
  currentUser(@Ctx() context: ContextType) {
    return context.getUser()
  }
  
  @Mutation()
  logout(@Ctx() context: ContextType):boolean {
    context.logout()
    return true
  }
}
export default UserResolvers;