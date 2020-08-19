import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Categories = ({ data }) => {
  return (
    <div>
      <h1>Categories</h1>
      <List>
        {data.map(({ category }) => (
          <Item href={category}>{category}</Item>
        ))}
      </List>
    </div>
  );
};

const Item = styled.a`
  text-decoration: none;
  list-style-type: none;
  color: black;
  font-size: 24px;
  padding: 10%;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;
export default Categories;
