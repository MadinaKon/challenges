import "./Tabs.css";

export default function Tabs({ text, count }) {
  return (
    <>
      <button type="button">
        {text}
        {count}
      </button>
    </>
  );
}
