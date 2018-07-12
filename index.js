import express from 'express'
import graphqlHTTP from 'express-graphql'
// import schema from './schema'
import schema from './schema/schema'
import mongoose from 'mongoose'
import cors from 'cors'
import keys from './keys'

const app = express()

app.use(cors())

mongoose.connect(
  keys.db.uri,
  { useNewUrlParser: true }
)

mongoose.connection.once('open', () => {
  /* eslint-disable */
  console.log('\x1b[35mConnected to database.\x1b[0m')
  /* eslint-enable */
})

app.get('/', (req, res) => {
  res.send('GraphQL is amazing!')
})

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

app.listen(8080, () => console.log('Running server on locolhost:8080/graphql'))
