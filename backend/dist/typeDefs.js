"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = apollo_server_express_1.gql `
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
//# sourceMappingURL=typeDefs.js.map