import { makeExecutableSchema } from 'graphql-tools'
import Friend from './Friend'

const SchemaDefinition = `
  schema {
    query: query
    mutation: mutation
  }
`

const RootQuery = `
  type query {
    _: Boolean
  }
`

const RootMutation = `
  type mutation {
    _: Boolean
  }
`

const schemas = [SchemaDefinition, RootQuery, RootMutation, ...Friend.schema]

const resolvers = {
  query: {
    ...Friend.resolvers.query,
  },
  mutation: {
    ...Friend.resolvers.mutation,
  },
}

const logger = { log: e => console.log(e) }

const makeExecSchemaParams = {
  typeDefs: schemas,
  resolvers,
  logger,
  allowUndefinedInResolve: false,
}

export default makeExecutableSchema(makeExecSchemaParams)
