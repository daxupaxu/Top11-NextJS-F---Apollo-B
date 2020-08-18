import React from "react";
import { withApollo } from "../libs/apollo";
import { useQuery } from "@apollo/react-hooks";
import { allData } from "../gql/schema";

const Home = () => {
  const { loading, error, data } = useQuery(allData);
  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="main">
      <h1>Categories fetched from API</h1>
      <div className="categories">
        {data.categories.map((data) => (
          <h2>{data.category}</h2>
        ))}
      </div>
      <h1>Articles fetched from API</h1>
      <div className="articles">
        {data.articles.map((data) => (
          <ul key={data.id}>
            <li>
              <h2>{data.title}</h2>
              {data.content}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default withApollo({ ssr: true })(Home);
