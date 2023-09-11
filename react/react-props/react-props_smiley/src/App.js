import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy={true} />;
}

function Smiley({ isHappy }) {
  return <div>Current mood:{isHappy ? "🤣" : "🥲"}</div>;
}
