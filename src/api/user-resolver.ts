import {
  Resolver,
  Query,
  Mutation,
  Ctx,
  Authorized
} from 'type-graphql'

import { User } from '@generated/type-graphql'

interface Context {
  getUser(): User,
  logout(): void
}

@Resolver()
class UserResolvers {
  @Authorized()
  @Query(() => String)
  currentUser (@Ctx() context: Context) {
    return 'Authorized user'
  }
  @Mutation()
  logout (@Ctx() context: Context):boolean {
    context.logout()
    return true
  }
}
export default UserResolvers;