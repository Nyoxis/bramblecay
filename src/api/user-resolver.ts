import {
  Resolver,
  Query,
  Mutation,
  Ctx
} from 'type-graphql'

import { User } from '@generated/type-graphql'

interface Context {
  getUser(): User,
  logout(): void
}

@Resolver()
class UserResolvers {
  @Query(() => User)
  currentUser (@Ctx() context: Context) {
    return context.getUser()
  }
  @Mutation()
  logout (@Ctx() context: Context):boolean {
    context.logout()
    return true
  }
}
export default UserResolvers;