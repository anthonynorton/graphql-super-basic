import ContactSchema from '../Contact'

const FriendSchema = `
  type Friend {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    age: Int
    language: String
    email: String
    contacts: [Contact]
  }

  enum Gender {
    MALE
    FEMALE
    OTHER
  }

  input FriendInput {
      id: ID
      firstName: String!
      lastName: String
      gender: Gender
      age: Int
      language: String
      email: String
      contacts: [ContactInput]
  }
`

export default [FriendSchema, ContactSchema]
