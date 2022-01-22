import session from 'express-session'
import {v4 as uuid} from 'uuid'
import passport from 'passport'
import { Application } from 'express'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function User(id) {
  const User = await prisma.user.findUnique({
    where: {id: id}
  })
  return User
}

interface User {
  id: String
}

const SESSION_SECRECT = 'bad secret' //to env

function passportInitialize(app: Application) {
  app.use(session({
    genid: (req) => uuid(),
    secret: SESSION_SECRECT,
    resave: false,
    saveUninitialized: false,
  }))

  passport.serializeUser((user:User, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    done(null, User(id))
  })

  app.use(passport.initialize())
  app.use(passport.session())
}

export default passportInitialize