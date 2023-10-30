import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <ul>
        {data.reviews.map(({ _id, title, text, rating }) => (
          <li key={_id}>
            <p>{title}</p>
            <p> {text}</p>
            <p>Rating: {rating}</p>
          </li>
        ))}
      </ul>

      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
