import FavoriteButton from "../FavoriteButton";
import "./Entry.css";
import Delete from "../Delete";

export default function Entry({ motto, notes, date, onDelete}) {
  return (
    <article className="entry">
      <time className="entry__date">{date}</time>
      <div className="entry__content">
        <div className="entry__motto-container">
          <h2 className="entry__motto">
            <q>{motto}</q>
          </h2>
          <FavoriteButton />
          <Delete onDelete={onDelete}/>
        </div>
        <p className="entry__notes">{notes}</p>
      </div>
    </article>
  );
}
