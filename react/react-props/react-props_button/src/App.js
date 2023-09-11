import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <Button color="green" disabled={false} text="click me" />
      <Button color="red" disabled={false} text="warn me" />
      <Button color="pink" disabled={true} text="neutral button" />
    </>
  );
}

function Button({ color, disabled, text }) {
  return (
    <button
      type="button"
      disabled={disabled}
      style={{ height: "50px", backgroundColor: "white", color: color }}
    >
      {text}
    </button>
  );
}
