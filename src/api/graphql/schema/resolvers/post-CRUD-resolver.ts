import {
  ObjectType,
  Resolver,
  Query,
  Mutation,
  Arg,
  Args,
  Ctx,
  Authorized,
  Field,
  ArgsType,
} from 'type-graphql'

import {
  Post,
  FindUniquePostArgs,
  FindManyPostArgs,
  CreateOnePostArgs,
  UpdateOnePostArgs,
  DeleteOnePostArgs,
} from '@generated/type-graphql'
import type { ContextType } from '..'
import GraphQLUpload from 'graphql-upload/GraphQLUpload.js'
import type { FileUpload } from 'graphql-upload/GraphQLUpload.js'
import { fileURLToPath } from 'url'

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
  
  @Authorized(["ADMIN"])
  @Mutation(() => Post)
  async createPost(
    @Args() args: CreateOnePostArgs,
    @Ctx() context: ContextType
  ) {
    return await context.prisma.post.create({ ...args })
  }
  @Authorized(["ADMIN"])
  @Mutation(() => Post, { nullable: true })
  async updatePost(
    @Args() args: UpdateOnePostArgs,
    @Ctx() context: ContextType
  ) {
    const result = await context.prisma.post.update({ ...args })
    context.revalidate(args.where.title)
    return result
  }
  @Authorized(["ADMIN"])
  @Mutation(() => Post, { nullable: true })
  async deletePost(
    @Args() args: DeleteOnePostArgs,
    @Ctx() context: ContextType
  ) {
    return await context.prisma.post.delete({ ...args })
  }
}

export default PostCRUDResolver