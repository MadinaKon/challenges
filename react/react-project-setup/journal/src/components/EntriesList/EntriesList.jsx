import Badge from "../Badge/Badge";
import "./EntriesList.css";

// eslint-disable-next-line react/prop-types
export default function EntriesList({ title, date, text, onFavorite }) {
  return (
    <>
      <div className="entries-list--date">{date}</div>
      <title className="entries-list--title" />
      {title} <Badge onClick={onFavorite} />
      <p className="entries-list--text">{text}</p>
    </>
  );
}
