import React from "react";
import styled from "styled-components";

const Categories: React.FunctionComponent = () => {
  return (
    <div>
      <h1>Categories</h1>
      <List>
        <h2>Fetched data later on</h2>
      </List>
    </div>
  );
};

// const Item = styled.a`
//   text-decoration: none;
//   list-style-type: none;
//   color: black;
//   font-size: 24px;
//   padding: 10%;
// `;
const List = styled.div`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;
export default Categories;
