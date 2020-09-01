import React from "react";
import { withApollo } from "../libs/apollo";
import { useQuery } from "@apollo/react-hooks";
import { allData } from "../gql/schema";
import Navbar from "../components/Navbar";
import Articles from "../components/Articles";

const Home: React.FunctionComponent = () => {
  const { loading, error, data } = useQuery(allData);
  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="main">
      {data.id}
      <Navbar />
      <Articles />
    </div>
  );
};

export default withApollo({ ssr: true })(Home);
