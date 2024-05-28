export const schema = gql`
  type User {
    id: String!
    email: String!
    first_name: String!
    last_name: String!
    dedication: String!
    Company: [Company]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
  }

  input CreateUserInput {
    email: String!
    first_name: String!
    last_name: String!
    dedication: String!
  }

  input UpdateUserInput {
    email: String
    first_name: String
    last_name: String
    dedication: String
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
    loginUser(email: String!): AuthPayload! @skipAuth
  }
`
