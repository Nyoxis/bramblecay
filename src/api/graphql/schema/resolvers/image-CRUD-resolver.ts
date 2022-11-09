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
  Image,
  CreateOneImageArgs,
  FindManyImageArgs,
} from '@generated/type-graphql'

import GraphQLUpload from 'graphql-upload/GraphQLUpload.js'
import { fileURLToPath } from 'url'
import { createHash } from 'node:crypto'

import type { FileUpload } from 'graphql-upload/GraphQLUpload.js'
import type { ContextType } from '..'

@ArgsType()
class createOneImageWithFileArgs extends CreateOneImageArgs {
  @Field(() => GraphQLUpload)
  image: Promise<FileUpload>
}

@Resolver()
class ImageCRUDResolver {
  @Query(() => [Image])
  async images(
    @Args() args: FindManyImageArgs,
    @Ctx() context: ContextType,
  ) {
    return context.prisma.image.findMany({ ...args })
  }
  
  @Authorized(["ADMIN"])
  @Mutation(() => Image)
  async createImage(
    @Args() args: createOneImageWithFileArgs,
    @Ctx() context: ContextType
  ) {
    
    
    const { createReadStream, filename } = await args.image
    const rs = createReadStream()
    const tempPath = fileURLToPath(new URL(`../../../../public/${filename}`, import.meta.url))
    const ws = context.createWriteStream(tempPath)
    
    const hash = createHash('md5').setEncoding('hex')
    rs.pipe(hash)
    
    const result = await context.pipeline(rs, ws)
      .then(() => {
        const hashSum = hash.read()
        if (!hashSum) throw new Error('no hash')
        return context.prisma.image.create({
          data: {
            id: hashSum,
            thumbnail: args.data.thumbnail,
            description: args.data.description,
          }
        })
          .then((result) => {
            const newPath = fileURLToPath(new URL(`../../../../public/${result.id}.jpg`, import.meta.url))
            context.renameFile(ws.path, newPath, (err) => {
              if (err) throw new Error('cant rename temp file')
            })
            return result
          })
          .catch((reason) => {
            context.unlinkFile(ws.path, (err) => {
              if (err) throw new Error('unable to unlink temp file')
            })
            throw reason
          })
      })
    return result
  }
}

export default ImageCRUDResolver