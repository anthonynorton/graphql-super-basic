const Friend = `
  type Friend {
    id: ID
    firstName: String
    lastName: String
    gender: String
    language: String
    email: String
  }



  input FriendInput {
      id: ID
      firstName: String!
      lastName: String
      gender: String
      language: String
      email: String
  }
`

export default Friend
