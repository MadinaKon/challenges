import { useState } from "react";
import "./StatusCheck.css";

const apiStatusUrl = "https://example-apis.vercel.app/api/status";

export default function StatusCheck() {
  let [statusIcon, setStatusIcon] = useState("⁉️");
  const [isLoading, setIsLoading] = useState(false);

  async function handleCheckApiStatus() {
    setIsLoading(true);
    try {
      const response = await fetch(apiStatusUrl);

      console.log("response ", response);
      console.log("response.ok ", response.ok);

      if (response.ok === true) {
        setStatusIcon("✅");
        setIsLoading(false);
      } else {
        setStatusIcon("❌");
        setIsLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <article className="status-check">
      <div className="status-check__wrapper">
        <h2 className="status-check__heading">Status:</h2>
        {isLoading ? (
          "⏳"
        ) : (
          <span className="status-check__icon">{statusIcon}</span>
        )}
        {/* <span className="status-check__icon">{statusIcon}</span> */}
      </div>
      <button
        type="button"
        className="status-check__button"
        onClick={handleCheckApiStatus}
      >
        Check API Status
      </button>
    </article>
  );
}
