import React from "react";
import "./styles.css";

function Sum({ valueA, valueB }) {
  return (
    <h3>
      The sum of {valueA} + {valueB} equals to {valueA + valueB}{" "}
    </h3>
  );
}

export default function App() {
  return (
    <h1>
      <Sum valueA={99} valueB={33} />
    </h1>
  );
}
