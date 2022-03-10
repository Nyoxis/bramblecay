import {
  Resolver,
  Query,
  Mutation,
  Args,
  Ctx,
  Authorized,
} from 'type-graphql'

import { User, FindManyUserArgs } from '@generated/type-graphql'
import { ContextType } from './typegraphql'

@Resolver()
class UserCRUDResolver {
  @Query(() => [User], {nullable: 'items'})
  users(
    @Args() args: FindManyUserArgs,
    @Ctx() context: ContextType
  ) {
    return context.prisma.user.findMany({...args})
  }
}

export default UserCRUDResolver