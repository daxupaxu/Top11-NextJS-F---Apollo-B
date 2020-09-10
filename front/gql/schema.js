import gql from "graphql-tag";

export const allData = gql`
  query Posts {
    posts {
      id
      author
      content
      createdAt
      updatedAt
    }
  }
`;
