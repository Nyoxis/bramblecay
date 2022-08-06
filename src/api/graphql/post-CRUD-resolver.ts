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
  CreatePostArgs,
  UpdatePostArgs,
  DeletePostArgs,
} from '@generated/type-graphql'
import type { ContextType } from '.'
import { GraphQLUpload } from "graphql-upload"
import type { FileUpload } from "graphql-upload"
import { fileURLToPath } from 'url'

@ArgsType()
class updatePostWithFileArgs extends UpdatePostArgs {
  @Field(() => GraphQLUpload)
  file: FileUpload
}

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
    @Args() args: CreatePostArgs,
    @Ctx() context: ContextType
  ) {
    return await context.prisma.post.create({ ...args })
  }
  
  @Authorized(["ADMIN"])
  @Mutation(() => Post, { nullable: true })
  async updatePost(
    @Args() args: updatePostWithFileArgs,
    @Ctx() context: ContextType
  ) {
    console.log(args.file.filename)
    const { filename, createReadStream } = args.file
    const rs = createReadStream()
    const ws = context.createWriteStream(fileURLToPath(new URL('1.img', import.meta.url)))
    return await context.pipeline(rs, ws)
  }
  @Authorized(["ADMIN"])
  @Mutation(() => Post, { nullable: true })
  async deletePost(
    @Args() args: DeletePostArgs,
    @Ctx() context: ContextType
  ) {
    return await context.prisma.post.delete({ ...args })
  }
}

export default PostCRUDResolver