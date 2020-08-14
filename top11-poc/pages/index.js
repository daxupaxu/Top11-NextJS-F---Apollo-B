import React from 'react'
import { withApollo } from '../libs/apollo';
import { useQuery } from '@apollo/react-hooks';
import { ALL_CHARACTERS } from '../gql/allCharacters';


const Home = () => {

  const { loading, error, data } = useQuery(ALL_CHARACTERS);
  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="main">
      <h1>Main page - setting up apollo graphql within nextjs - </h1>
      <div>
        {data.characters.results.map((data) => (
          <ul key={data.id}>
            <li>{data.name}</li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default withApollo({ssr: true})(Home)
