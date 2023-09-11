import React from "react";
import "./styles.css";

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">headline</h2>
      <label htmlFor="article-favorite">
        Give your favorite React article page
      </label>
      <input type="text" id="article-favorite" name="article-favorite" />
      <a
        className="article__link"
        href="https://learnreact.design/posts/what-is-react"
      >
        What is React: A Visual Introduction For Beginners
      </a>
    </article>
  );
}

export default function App() {
  return <Article />;
}
