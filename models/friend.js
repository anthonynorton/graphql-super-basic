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

export default defineOnce('Friend', FriendSchema)
