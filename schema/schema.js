import { buildSchema } from 'graphql'
import { makeExecutableSchema } from 'graphql-tools'
import FriendModel from '../models/friend'

const typeDefs = `
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: String
        language: String
        emails: [Email]
    }

    type Email {
      email: String
    }

    type Query {
        friend: Friend
    }
`

const Friend = (id, { firstName, lastName, gender, language, emails }) => {}

const resolvers = {
  Query: {
    friend: () => {
      return {
        id: '209ufiofj3489',
        firstName: 'Anthony',
        lastName: 'Norton',
        gender: 'Male',
        language: 'English',
        emails: [
          { email: 'nortonanthonya@gmail.com' },
          { email: 'moejoejoejoe2000@gmail.com' },
        ],
      }
    },
  },
}

const logger = { log: e => console.log(e) }

const makeExecSchemaParams = {
  typeDefs,
  resolvers,
  logger,
  allowUndefinedInResolve: false,
}
export default makeExecutableSchema(makeExecSchemaParams)
