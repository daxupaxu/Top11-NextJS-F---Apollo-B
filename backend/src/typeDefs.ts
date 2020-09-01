import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    posts: [Post!]!
  }
  type Post {
    id: ID!
    author: String!
    content: String
    createdAt: String!
    updatedAt: String!
  }
  type Mutation {
    createPost(author: String!, content: String!): Post!
    deletePost(id: String!): Post
    updatePost(id: String!, content: String): Post
  }
`;
