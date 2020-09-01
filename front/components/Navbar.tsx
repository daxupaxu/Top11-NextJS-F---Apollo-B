import React from "react";
import styled from "styled-components";

const Navbar: React.FunctionComponent = () => {
  return (
    <Main>
      <Title>Top 11</Title>
      <List>
        <Item>of the Day</Item>
        <Item>of the Week</Item>
        <Item>of the Month</Item>
        <Item>of the Year</Item>
      </List>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-between;
`;

const Title = styled.p`
  border: 1px solid #707070;
  font-size: 45px;
  margin-left: 9rem;
  padding: 25px;
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Item = styled.li`
  margin-right: 5rem;
  padding: 25px;
  border: 1px solid #707070;

  &:hover {
    background-color: black;
    cursor: pointer;
    color: white;
  }
`;

export default Navbar;
