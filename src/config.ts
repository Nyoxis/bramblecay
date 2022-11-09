import dotenv from "dotenv"

// Parsing the env file.
dotenv.config()

// Interface to load env variables
// Note these variables can possibly be undefined
// as someone could skip these varibales or not setup a .env file at all

interface ENV {
  NODE_ENV: boolean
  PORT: number | undefined
  REVALIDATION_TOKEN: string | undefined
}

type NonNullableKey<T> = {
  [P in keyof T]: NonNullable<T[P]>
}

type Config = NonNullableKey<ENV>

// Loading process.env as ENV interface

const getConfig = (): ENV => {
  return {
    NODE_ENV: process.env.NODE_ENV ? String(process.env.NODE_ENV) === 'development' : false,
    PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
    REVALIDATION_TOKEN: process.env.REVALIDATION_TOKEN ? String(process.env.REVALIDATION_TOKEN) : undefined,
  }
}

// Throwing an Error if any field was undefined we don't 
// want our app to run if it can't connect to DB and ensure 
// that these fields are accessible. If all is good return
// it as Config which just removes the undefined from our type 
// definition.

const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`)
    }
  }
  return config as Config
}

const config = getConfig()

const sanitizedConfig = getSanitzedConfig(config)

export default sanitizedConfig
