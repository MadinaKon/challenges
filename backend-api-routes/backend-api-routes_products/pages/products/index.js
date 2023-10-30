import useSWR from "swr";
import SingleProductListing from "./[id]";

export default function ProductListing() {
  const { data, isLoading } = useSWR("/api/products");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ul>
      <h2>List of products</h2>
      {data.map(({ id, name, description, price, currency, category }) => (
        <li key={id}>
          <SingleProductListing />
          {name}
        </li>
      ))}
    </ul>
  );
}
