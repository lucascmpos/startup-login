export const schema = gql`
  type Company {
    id: String!
    name: String!
    description: String!
    website: String
    businessModel: String!
    metricArrRaw: Float
    metricArrNet: Float
    foundation: DateTime!
    team_size: Int!
    opportunities: [String]!
    valuation: Float
    openings: [String]!
    reasoningOpening: String
    userId: String!
    user: User!
  }

  type Query {
    companies: [Company!]! @requireAuth
    company(id: String!): Company @requireAuth
  }

  input CreateCompanyInput {
    name: String!
    description: String!
    website: String
    businessModel: String!
    metricArrRaw: Float
    metricArrNet: Float
    foundation: DateTime!
    team_size: Int!
    opportunities: [String]!
    valuation: Float
    openings: [String]!
    reasoningOpening: String
    userId: String!
  }

  input UpdateCompanyInput {
    name: String
    description: String
    website: String
    businessModel: String
    metricArrRaw: Float
    metricArrNet: Float
    foundation: DateTime
    team_size: Int
    opportunities: [String]!
    valuation: Float
    openings: [String]!
    reasoningOpening: String
    userId: String
  }

  type Mutation {
    createCompany(input: CreateCompanyInput!): Company! @requireAuth
    updateCompany(id: String!, input: UpdateCompanyInput!): Company!
      @requireAuth
    deleteCompany(id: String!): Company! @requireAuth
  }
`
