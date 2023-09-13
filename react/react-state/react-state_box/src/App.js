import { useState } from "react";
import "./styles.css";

export default function App() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      {isActive ? (
        <button onClick={handleClick}>Deactivate</button>
      ) : (
        <button onClick={handleClick}>Activate</button>
      )}
    </main>
  );
}
