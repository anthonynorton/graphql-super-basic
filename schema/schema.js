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
        email: String
    }
    type Query {
        friend(id: String!): Friend
    }

    input FriendInput {
        id: ID
        firstName: String!
        lastName: String
        gender: String
        language: String
        email: String
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
    }
`

const Friend = (id, { firstName, lastName, gender, language, email }) => {}

const resolvers = {
  Query: {
    friend: async (_, { id }) => {
      console.log(`\x1b[31m${id}\x1b[0m`)

      const resp = await FriendModel.findById({
        _id: '5b4793cbe7179a2f2c78e59a',
      })
      const friendObj = await resp.toObject()
      const friend = {
        ...friendObj,
        id: friendObj._id,
      }
      debugger
      return friend
    },
  },
  Mutation: {
    createFriend: async (_, { input: args }) => {
      console.log(args)
      debugger
      const { firstName, lastName, gender, language, email } = args
      const friend = await FriendModel.create({
        firstName,
        lastName,
        gender,
        language,
        email,
      })
      return friend
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
