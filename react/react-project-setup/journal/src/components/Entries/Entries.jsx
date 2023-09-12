import EntriesList from "../EntriesList/EntriesList";
export default function Entries() {
  return (
    <section>
      Entries
      <div style={{ border: "solid black 1px" }}>All Entries</div>
      <div style={{ border: "solid black 1px" }}>Favorites</div>
      <EntriesList />
    </section>
  );
}
