import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [code, setCode] = useState("");
  // expected sequence
  const validCode = "🐡🐠🐋";

  const handleClick = (event) => {
    const value = event.target.textContent;
    setCode(code + value);
  };

  const handleReset = () => {
    setCode("");
  };

  return (
    <div className="container">
      <div className="button-container">
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button type="button" onClick={handleReset}>
        Reset
      </button>
      <h2>{code.length ? code : "?"}</h2>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
