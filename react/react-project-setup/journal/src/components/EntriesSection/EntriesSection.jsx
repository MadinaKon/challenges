import EntriesList from "../EntriesList/EntriesList";
import Tabs from "../Tabs/Tabs";
export default function Entries() {
  return (
    <section className="entries-section">
      Entries
      <Tabs text="All Entries" count="3" />
      <Tabs text="Favorites" count="1" />
      <EntriesList
        title="Thats life in the city"
        date="FEB 27, 2028"
        ch
        text="Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, idque instituit docere sic omne animal, simul atque."
      />
      <EntriesList
        title="Thats life in the city"
        date="FEB 27, 2028"
        text="Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, idque instituit docere sic omne animal, simul atque."
      />
      <EntriesList
        title="Thats life in the city"
        date="FEB 27, 2028"
        text="Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, idque instituit docere sic omne animal, simul atque."
      />
    </section>
  );
}
