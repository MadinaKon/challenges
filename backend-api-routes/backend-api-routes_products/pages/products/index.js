import useSWR from "swr";

export default function ProductListing() {
  const { data, isLoading } = useSWR("/api/products");
  console.log(" DATA ", data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ul>
      {data.map(({ id, name, description, price, currency, category }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}
