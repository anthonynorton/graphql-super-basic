import { Schema } from 'mongoose'
import defineOnce from './definedOnce'

/*
type Friend {
  id: ID
  firstName: String
  lastName: String
  gender: String
  language: String
  emails: String
}
*/

const FriendSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String },
  language: { type: String },
  emails: [
    {
      emails: { type: String },
    },
  ],
})

export default defineOnce('Friend', FriendSchema)
