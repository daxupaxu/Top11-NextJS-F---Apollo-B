import React from "react";
import styled from "styled-components";
import Post from "./Post";
import Categories from "./Categories";

const Posts: React.FC = ({ posts }: any) => {
  return (
    <Main>
      <Left>
        <Categories />
      </Left>
      <Right>
        <Header>News</Header>
        <div className="posts-list">
          {posts.map((post) => (
            <Post content={post.content} author={post.author} />
          ))}
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

export default Posts;
