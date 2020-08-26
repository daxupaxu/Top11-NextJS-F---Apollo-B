import gql from "graphql-tag";

export const allData = gql`
  query getArticles {
    articles {
      id
      title
      content
    }
    categories {
      category
    }
  }
`;
