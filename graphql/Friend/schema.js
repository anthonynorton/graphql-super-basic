import ContactSchema from './contact'

const friendFields = `
    _id: String
    firstName: String
    lastName: String
    gender: Gender
    age: Int
    language: String
    email: String
`

const FriendSchema = `
  type Friend {
    ${friendFields}
    contacts: [Contact]
  }

  enum Gender {
    MALE
    FEMALE
    OTHER
  }

  input FriendInput {
    ${friendFields}
    contacts: [ContactInput]
  }

  extend type query {
    getOneFriend(id: String!): Friend
    getFriends: [Friend]
  }

  extend type mutation {
    createFriend(input: FriendInput): Friend
    updateFriend(id: String!, input: FriendInput): Friend
    deleteFriend(id: String!): String
  }
`

export default [FriendSchema, ContactSchema]
