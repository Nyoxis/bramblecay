import {
  Resolver,
  Mutation,
  Arg
} from 'type-graphql'
import prisma from 'prisma'
import {
  User,
  UserWhereUniqueInput,
  UserKind,
} from '@generated/type-graphql'

@Resolver()
class UserResolver {
  @Mutation(() => User)
  changeUserKind(
    @Arg("where") where: UserWhereUniqueInput,
    @Arg("kind") kind: UserKind,
  ) {
//  log.info("Changing user kind", { where, kind })
    return prisma.user.update({ where, data: { kind } })
  }
}

export default UserResolver