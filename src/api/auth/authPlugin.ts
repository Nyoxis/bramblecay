import fastifyPlugin from 'fastify-plugin'
import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify'

import { Authenticator } from 'fastify-passport'
import cookie from 'fastify-cookie'
import session from '@mgcrea/fastify-session'
import Redis from 'ioredis'
import RedisStore from '@mgcrea/fastify-session-redis-store'

import githubOAuth2Plugin from './githubOAuth2Plugin'
import dummyStrategyPlugin from './dummyStrategy'


import { User } from '@generated/type-graphql'

declare module 'fastify' {
  interface PassportUser extends User {}
}

declare module 'fastify' {
  interface Session {
      passport: {id: string}
  }
}
//to env
const SECRET = 'a secret with minimum length of 32 characters'
const REDIS_URI = '127.0.0.1:6379'
const SESSION_TTL = 864e3 // 1 day in seconds

const authPlugin: FastifyPluginAsync = async (fastify) => {
  const passport = new Authenticator()
  fastify.register(cookie)
  // in-memory session store leaks memory
  // secure: false for http localhost
  fastify.register(session, {
    store: new RedisStore({ client: new Redis(REDIS_URI), ttl: SESSION_TTL }),
    secret: SECRET,
    cookie: { secure: false, maxAge: SESSION_TTL },
  }) 
  // both passport initiations is required
  fastify.register(passport.initialize())
  fastify.register(passport.secureSession())

  passport.registerUserSerializer(async (user: User, request) => {
    return user.id
  })
  passport.registerUserDeserializer(async (id: string, request) => {
    return await fastify.prisma.user.findFirst({where: {id: id}})
  })
  //fastify.register(githubOAuth2Plugin)
  fastify.register(dummyStrategyPlugin)
}



export default fastifyPlugin(authPlugin)