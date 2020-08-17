const { gql } = require("apollo-server");

const typeDefs = gql`
  # schema starts here
  type Category {
    id: ID!
    name: String
    articles: [Article]!
  }

  type Article {
    id: ID!
    title: String
    content: String
    rate: Float
  }
  type Query {
    categories: [Category]!
    articles: [Article]!
    article(id: ID!): Article
  }
`;

module.exports = typeDefs;
