import { makeExecutableSchema } from 'graphql-tools'
import FriendModel from '../models/friend'
import Friend from './friend'

const RootQuery = `
    type query {
        getFriend(id: String!): Friend
    }
`

const RootMutation = `
    type mutation {
        createFriend(input: FriendInput): Friend
    }
`

const SchemaDefinition = `
  schema {
    query: query
    mutation: mutation
  }
`

const resolvers = {
  query: {
    getFriend: async (_, { id }) => {
      const resp = await FriendModel.findById({
        _id: id,
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
  mutation: {
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
  typeDefs: [SchemaDefinition, RootQuery, RootMutation, Friend],
  resolvers,
  logger,
  allowUndefinedInResolve: false,
}

export default makeExecutableSchema(makeExecSchemaParams)
