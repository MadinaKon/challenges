import { useState } from "react";
import EntriesList from "../EntriesList/EntriesList";
import Tabs from "../Tabs/Tabs";
export default function Entries() {
  // closest common ancestor of two components
  const [count, setCount] = useState(0);

  return (
    <section className="entries-section">
      Entries
      <Tabs text="All Entries" count="3" />
      <Tabs text="Favorites" count={count} />
      <EntriesList
        title="Thats life in the city"
        date="FEB 27, 2028"
        ch
        text="Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, idque instituit docere sic omne animal, simul atque."
        // onFavorite={(bool) => {if (bool === true) setCount(count+1)}}
        onFavorite={(isFavorite) =>
          isFavorite ? setCount(count + 1) : setCount(count - 1)
        }
      />
      <EntriesList
        title="Thats life in the city"
        date="FEB 27, 2028"
        text="Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, idque instituit docere sic omne animal, simul atque."
        onFavorite={(isFavorite) =>
          isFavorite ? setCount(count + 1) : setCount(count - 1)
        }
      />
      <EntriesList
        title="Thats life in the city"
        date="FEB 27, 2028"
        text="Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, idque instituit docere sic omne animal, simul atque."
        onFavorite={(isFavorite) =>
          isFavorite ? setCount(count + 1) : setCount(count - 1)
        }
      />
    </section>
  );
}
