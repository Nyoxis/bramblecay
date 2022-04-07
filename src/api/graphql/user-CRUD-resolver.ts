import {
  Resolver,
  Query,
  Mutation,
  Args,
  Ctx,
  Authorized,
} from 'type-graphql'

import { User, FindManyUserArgs, CreateUserArgs, DeleteUserArgs } from '@generated/type-graphql'
import { ContextType } from '.'

@Resolver()
class UserCRUDResolver {
  @Query(() => [User], {nullable: 'itemsAndList'})
  users(
    @Args() args: FindManyUserArgs,
    @Ctx() context: ContextType
  ) {
    return context.prisma.user.findMany({...args})
  }
  
  @Mutation(() => User)
  createUser(
    @Args() args: CreateUserArgs,
    @Ctx() context: ContextType
  ) {
    return context.prisma.user.create({...args})
  }

  @Mutation(() => User)
  deleteUser(
    @Args() args: DeleteUserArgs,
    @Ctx() context: ContextType
  ) {
    return context.prisma.user.delete({...args})
  }
}

export default UserCRUDResolver