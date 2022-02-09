import fastifyPlugin from 'fastify-plugin'
import { FastifyPluginAsync } from 'fastify'

import { Authenticator } from 'fastify-passport'
import cookie from 'fastify-cookie'
import session from '@fastify/session'
import githubOAuth2Plugin from './githubOAuth2Plugin'
import dummyStrategyPlugin from './dummyStrategy'

import { AuthChecker } from 'type-graphql'
import { СontextType } from '../graphqService'

interface User {
  id: string,
  firstName: String,
  lastName: String,
  email: String,
  password: String}
declare module 'fastify' {
  interface PassportUser extends User {}
}

const users:User[] = [
  {
    id: '1',
    firstName: 'Maurice',
    lastName: 'Moss',
    email: 'maurice@moss.com',
    password: 'abcdefg'
  },
  {
    id: '2',
    firstName: 'Roy',
    lastName: 'Trenneman',
    email: 'roy@trenneman.com',
    password: 'imroy'
  }
]
const authPlugin: FastifyPluginAsync = async (fastify) => {
  const passport = new Authenticator()
  fastify.register(cookie)
  fastify.register(session, {secret: 'a secret with minimum length of 32 characters'}) //to env
  fastify.register(passport.initialize())
  passport.registerUserSerializer(async (user: User, request) => user.id)
  passport.registerUserDeserializer(async (id, request) => {
    return await users.find(user => user.id ===id)
  })
  //fastify.register(githubOAuth2Plugin)
  fastify.register(dummyStrategyPlugin)
}

const customAuthChecker: AuthChecker<СontextType> = (
  { root, args, context, info },
  roles,
) => {
  console.log(context.getUser())
  if (context.getUser()) return true
  else return false
  // here we can read the user from context
  // and check his permission in the db against the `roles` argument
  // that comes from the `@Authorized` decorator, eg. ["ADMIN", "MODERATOR"]
}

export default fastifyPlugin(authPlugin)
export { users, customAuthChecker }