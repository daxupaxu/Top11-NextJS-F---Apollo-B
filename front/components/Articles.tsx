import React from "react";
import styled from "styled-components";
import Article from "./Article";
import Categories from "./Categories";

const Articles: React.FunctionComponent = () => {
  return (
    <Main>
      <Left>
        <Categories />
      </Left>
      <Right>
        <Header>News</Header>
        <div className="articles-list">
          {/* {data.articles.map((article) => ( */}
          <Article />
        </div>
      </Right>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
`;
const Left = styled.div`
  width: 25vw;
  text-align: center;
`;
const Right = styled.div`
  width: 70vw;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  float: right;
  margin: 5%;
`;
const Header = styled.h2`
  text-align: center;
  font-size: 35px;
`;

export default Articles;
