import fastifyPlugin from 'fastify-plugin'
import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify'
import passport from 'fastify-passport'
import LocalStrategy from 'passport-local'
import { users } from './authPlugin'

const dummyStrategyPlugin: FastifyPluginAsync = async (fastify) => {
  passport.use(new LocalStrategy(function verify(username, password, done) {
    const user = users.find(user => user.email === username)
    if (!user) return done(new Error('wrong username'))
    if (user.password === password) return done(null, user)
    else return done(new Error('wrong password'))
  }))
  fastify.post(
    '/login/password',
    { preValidation: passport.authenticate('local', {}) },
    () => {}
  )
}

export default fastifyPlugin(dummyStrategyPlugin)