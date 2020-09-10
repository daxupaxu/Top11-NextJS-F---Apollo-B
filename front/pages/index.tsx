import React from "react";
import { withApollo } from "../libs/apollo";
import { useQuery } from "@apollo/react-hooks";
import { allData } from "../gql/schema";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";

const Home: React.FC = () => {
  const { loading, error, data } = useQuery(allData) as any;
  if (error) return <h1>error</h1>;
  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="main">
      <Navbar />
      <Posts data={data.posts} />
    </div>
  );
};

export default withApollo({ ssr: true })(Home);
