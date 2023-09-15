import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";

import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Badge({ onClick }) {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <button
      className="favorite-button"
      onClick={() => {
        setIsFavorite(!isFavorite);
        // passing the value to the parent EntriesList
        onClick(!isFavorite);
      }}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
