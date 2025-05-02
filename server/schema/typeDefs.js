const { gql } = require('graphql-tag');

const typeDefs = gql`
  type Query {
    hello: String
  }

  type Mutation {
    bookAppointment(name: String!, date: String!): String
  }
`;

module.exports = typeDefs;