import { PostWhereInput } from './../../gqless/schema.generated';
import {
  Resolver,
  Query,
  Mutation,
  Arg,
  Args,
  Ctx,
  Authorized,
} from 'type-graphql'

import {
  Post,
  FindUniquePostArgs,
  FindManyPostArgs,
  CreatePostArgs,
  UpdatePostArgs,
  DeletePostArgs,
} from '@generated/type-graphql'
import { ContextType } from '.'

@Resolver()
class PostCRUDResolver {
  @Query(() => Post, { nullable: true })
  post(
    @Args() args: FindUniquePostArgs,
    @Ctx() context: ContextType
  ) {
    return context.prisma.post.findUnique({ ...args })
  }
  
  @Query(() => [Post])
  posts(
    @Args() args: FindManyPostArgs,
    @Ctx() context: ContextType
  ) {
    return context.prisma.post.findMany({ ...args })
  }
  
  @Mutation(() => Post)
  async createPost(
    @Args() args: CreatePostArgs,
    @Ctx() context: ContextType
  ) {
    return await context.prisma.post.create({ ...args })
  }
  @Mutation(() => Post, { nullable: true })
  async updatePost(
    @Args() args: UpdatePostArgs,
    @Ctx() context: ContextType
  ) {
    return await context.prisma.post.update({ ...args })
  }
  
  @Mutation(() => Post, { nullable: true })
  async deletePost(
    @Args() args: DeletePostArgs,
    @Ctx() context: ContextType
  ) {
    return await context.prisma.post.delete({ ...args })
  }
}

export default PostCRUDResolver