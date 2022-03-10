import {
  Resolver,
  Query,
  Mutation,
  Arg,
  Args,
  Ctx,
  Authorized,
} from 'type-graphql'

import { Post, PostWhereUniqueInput, CreatePostArgs } from '@generated/type-graphql'
import { ContextType } from './typegraphql'

@Resolver()
class PostCRUDResolver {
  @Query(() => Post)
  post(
    @Arg('where') where: PostWhereUniqueInput,
    @Ctx() context: ContextType
  ) {
    return context.prisma.post.findFirst({where})
  }

  @Mutation(() => Post)
  async createPost(
    @Args() args: CreatePostArgs,
    @Ctx() context: ContextType
  ) {
    return await context.prisma.post.create({...args})
  }
}

export default PostCRUDResolver