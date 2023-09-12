import "./Tabs.css";

export default function Tabs({ text, count }) {
  return (
    <>
      {/* <ul className="tabs__list">
        <li className="tabs__item tabs__item--active">
          <a href="#tab1" className="tabs__link">
            {" "}
            {text} {count}
          </a>
        </li>
      </ul> */}
      <button type="button" style={{ border: "solid black 1px" }}>
        {text}
        {count}
      </button>
    </>
  );
}
