import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <Button
        color="green"
        disabled={false}
        text="click me"
        onButtonClick={() => console.log("click green")}
      />
      <Button
        color="red"
        disabled={false}
        text="warn me"
        onButtonClick={() => console.log("click red")}
      />
      <Button color="pink" disabled={true} text="neutral button" />
    </>
  );
}

function Button({ color = "blue", disabled, text, onButtonClick }) {
  return (
    <button
      type="button"
      disabled={disabled}
      style={{ height: "50px", backgroundColor: "white", color: color }}
      // onClick={onButtonClick}
      onClick={() => alert("you cliked the button")}
    >
      {text}
    </button>
  );
}
