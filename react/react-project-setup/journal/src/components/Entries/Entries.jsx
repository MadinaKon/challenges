import EntriesList from "../EntriesList/EntriesList";
import Tabs from "../Tabs/Tabs";
export default function Entries() {
  return (
    <section>
      Entries
      <Tabs text="All Entries" />
      <Tabs text="Favorites" />
      <EntriesList />
    </section>
  );
}
