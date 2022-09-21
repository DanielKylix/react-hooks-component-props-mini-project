import React from "react";
import Article from "./Article";

const ArticleList = ({ posts }) => {
  return (
    <React.Fragment>
      <main>
        {posts.map((article) => (
          <Article
            key={article.id}
            title={article.title}
            date={article.date}
            preview={article.preview}
          />
        ))}
      </main>
    </React.Fragment>
  );
};

export default ArticleList;
