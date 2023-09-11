import React from "react";
import "./styles.css";

function HelloWorldArticle() {
  return (
    <article>
      <h1>I am a heading inside a component</h1>
      <p>I am a paragraph inside a component</p>
    </article>
  );
}

export default function App() {
  return (
    <div>
      <HelloWorldArticle />
    </div>
  );
}
