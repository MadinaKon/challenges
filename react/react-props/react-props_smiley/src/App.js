import React from "react";
import "./styles.css";

export default function App() {
  return (
    <h1>
      <Smiley isHappy={true} />
      <Smiley isHappy={false} />
    </h1>
  );
}

function Smiley({ isHappy }) {
  return <h2>Current mood:{isHappy ? "🤣" : "🥲"}</h2>;
}
