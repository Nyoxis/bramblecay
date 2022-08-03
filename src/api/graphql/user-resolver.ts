import {
  Resolver,
  Query,
  Mutation,
  Arg,
  Ctx,
  Authorized,
  Args,
  createUnionType,
} from 'type-graphql'

import { User, CreatePostArgs, Post } from '@generated/type-graphql'
import type { ContextType } from '.'

@Resolver()
class UserResolvers {
  @Query(() => User)
  currentUser(@Ctx() context: ContextType): User {
    const user = context.getUser()
    if (user) return user
    return
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