import {
  Resolver,
  Query,
  Mutation,
  Arg,
  Ctx,
  Authorized,
  Args,
} from 'type-graphql'

import { User, CreatePostArgs, Post } from '@generated/type-graphql'
import { ContextType } from '.'

@Resolver()
class UserResolvers {
  @Authorized()
  @Query(() => User)
  currentUser(@Ctx() context: ContextType) {
    return context.getUser()
  }
  
  @Mutation(() => Boolean)
  logout(
    @Ctx() context: ContextType
  ) {
    console.log(`some user ${!context.getUser()}`)
    if (!context.getUser()) return false
    context.logout()
    return true
  }
}
export default UserResolvers;