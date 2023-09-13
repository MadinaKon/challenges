import Badge from "../Badge/Badge";
import "./EntriesList.css";

export default function EntriesList({ title, date, text }) {
  return (
    <>
      <div className="entries-list--date">{date}</div>
      <title className="entries-list--title" />
      {title} <Badge />
      <p className="entries-list--text">{text}</p>
    </>
  );
}
