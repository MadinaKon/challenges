import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("button component");
  }
  return (
    <>
      <Button
        color="green"
        disabled={false}
        text="click me"
        onClick={handleClick}
      />
      <Button
        color="red"
        disabled={false}
        text="warn me"
        onClick={handleClick}
      />
      <Button
        color="pink"
        disabled={true}
        text="neutral button"
        onClick={handleClick}
      />
    </>
  );
}

function Button({ color = "blue", disabled, text, onClick }) {
  return (
    <button
      type="button"
      disabled={disabled}
      style={{ height: "50px", backgroundColor: "white", color: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
