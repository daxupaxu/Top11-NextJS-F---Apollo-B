const { gql } = require("apollo-server");

const typeDefs = gql`
  type Category {
    category: String
  }

  type Article {
    id: ID!
    title: String
    content: String
    rate: Float
    name: Category
  }
  type Query {
    categories: [Category]
    articles: [Article]
    article(id: ID!): Article
  }
`;

module.exports = { typeDefs };
