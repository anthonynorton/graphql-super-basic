import { Schema } from 'mongoose'
const { ObjectId } = Schema
import defineOnce from './definedOnce'

const FriendSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String },
  age: { type: Number },
  language: { type: String },
  email: { type: String },
  contacts: [
    {
      firstName: String,
      lastName: String,
    },
  ],
})

FriendSchema.pre('findOneAndUpdate', async data => {
  console.log(
    `\x1b[32m\n\nfindOneAndUpdate » typeof data: ${typeof data}\n\n\x1b[0m`
  )
})
export default defineOnce('Friend', FriendSchema)
