import React from "react";
import "./styles.css";

function Sum({ valueA, valueB }) {
  const sum = valueA + valueB;
  return (
    <h3>
      The sum of {valueA} + {valueB} equals to {sum}{" "}
    </h3>
  );
}

export default function App() {
  return <Sum valueA={99} valueB={33} />;
}
