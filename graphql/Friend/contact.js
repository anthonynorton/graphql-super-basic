const ContactSchema = `
  type Contact {
    id: ID
    firstName: String
    lastName: String
  }

  input ContactInput {
      firstName: String!
      lastName: String
  }
`

export default ContactSchema
