import React, { useState } from "react";
import "./styles.css";

// export default function App() {
//   let code = "?";

//   const validCode = "🐡🐠🐋";

//   return (
//     <div className="container">
//       <div className="button-container">
//         <button
//           type="button"
//           onClick={() => {
//             console.log("Update Code!");
//           }}
//         >
//           <span role="img" aria-label="Pufferfish">
//             🐡
//           </span>
//         </button>
//         <button
//           type="button"
//           onClick={() => {
//             console.log("Update Code!");
//           }}
//         >
//           <span role="img" aria-label="Whale">
//             🐋
//           </span>
//         </button>
//         <button
//           type="button"
//           onClick={() => {
//             console.log("Update Code!");
//           }}
//         >
//           <span role="img" aria-label="Clownfish">
//             🐠
//           </span>
//         </button>{" "}
//       </div>

//       <button
//         type="button"
//         onClick={() => {
//           console.log("Reset Code!");
//         }}
//       >
//         Reset
//       </button>
//       <h2>{code}</h2>

//       {code === validCode && <p>Valid code!</p>}
//     </div>
//   );
// }

export default function App() {
  const [code, setCode] = useState("?");
  // const [validCode, setValidCode] = useState("🐡🐠🐋");

  const validCode = "🐡🐠🐋";

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            setCode("🐡");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            setCode("🐋");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            setCode("🐠");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button type="button" onClick={() => setCode(code)}>
        Reset
      </button>
      <h2>{code}</h2>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
