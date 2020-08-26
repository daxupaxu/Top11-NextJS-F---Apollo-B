import React from "react";

const Article = ({ data }) => {
  return (
    <div>
      <h4>{data.title}</h4>
      <p>{data.content}</p>
    </div>
  );
};

export default Article;
