import {
  ObjectType,
  Field,
  Resolver,
  Query,
  Mutation,
  Arg,
  Ctx,
  Authorized,
  Args,
  createUnionType,
} from 'type-graphql'

import { User, UserKind, CreateOnePostArgs, Post } from '@generated/type-graphql'
import type { ContextType } from '..'

class UserResolvers {
  @Authorized()
  @Query(() => User, { nullable: true })
  currentUser(@Ctx() context: ContextType): User {
    const user = context.getUser()
    return user
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