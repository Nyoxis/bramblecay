import fastifyPlugin from 'fastify-plugin'
import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify'
import passport from 'fastify-passport'
import LocalStrategy from 'passport-local'


async function findUserbyEmail(email: string) {
  return 
}

const dummyStrategyPlugin: FastifyPluginAsync = async (fastify) => {
  passport.use(new LocalStrategy(async function verify(username, password, done) {
    let user
    try {
      user = await fastify.prisma.user.findUnique({where: {email: username}})
      if (!user) return done(null, false, {message: 'No user by that email'})
    } catch (e) {
      return done(e)
    }
    if (user.password !== password) return done(null, false, {message: 'Not a matching password'})
    
    return done(null, user)
  }))
  fastify.post(
    '/api/login',
    { preValidation: passport.authenticate('local', { successRedirect: '/user', authInfo: false }) },
    () => {}
  )
}

export default fastifyPlugin(dummyStrategyPlugin)