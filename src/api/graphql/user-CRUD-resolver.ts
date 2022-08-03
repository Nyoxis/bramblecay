import {
  Resolver,
  Query,
  Mutation,
  Args,
  Ctx,
  Authorized,
} from 'type-graphql'

import { User, FindManyUserArgs, CreateUserArgs, DeleteUserArgs } from '@generated/type-graphql'
import type { ContextType } from '.'

@Resolver()
class UserCRUDResolver {
  @Query(() => [User])
  users(
    @Args() args: FindManyUserArgs,
    @Ctx() context: ContextType
  ) {
    return context.prisma.user.findMany({ ...args })
  }
  
  @Mutation(() => User)
  createUser(
    @Args() args: CreateUserArgs,
    @Ctx() context: ContextType
  ) {
    return context.prisma.user.create({ ...args })
  }
  
  @Mutation(() => User, { nullable: true })
  deleteUser(
    @Args() args: DeleteUserArgs,
    @Ctx() context: ContextType
  ) {
    return context.prisma.user.delete({ ...args })
  }
}

export default UserCRUDResolver