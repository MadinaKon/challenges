import React from "react";
import Link from "next/link";

export default function Movies() {
  return (
    <>
      <div>Movies</div>
      <ul>
        <Link href="/movies/hulk">Hulk</Link>
        <Link href="/movies/spiderman">Spiderman</Link>
      </ul>
    </>
  );
}
