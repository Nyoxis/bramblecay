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
import { ContextType } from '.'

const CurrentUserType = createUnionType({
  name: 'CurrentUserType',
  types: () => [User, String] as const,
  resolveType: value => {
    if (typeof value !== 'object') return String
    return User
  }
})
@Resolver()
class UserResolvers {
  @Query(() => CurrentUserType)
  currentUser(@Ctx() context: ContextType): typeof CurrentUserType {
    const user = context.getUser()
    if (user) return user
    return 'unauthorized'
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