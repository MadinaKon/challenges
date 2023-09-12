// Each entry in the entry list has a title, a date,
// a text and a favorite icon button.

export default function EntriesList({ title, date, text }) {
  return (
    <>
      <div>{date}</div>
      <title>{title}</title>
      <p>{text}</p>
      <button type="button">addToFavorite</button>
    </>
  );
}
