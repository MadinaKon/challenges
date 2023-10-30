import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function SingleProductListing() {
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
    <>
      <div>{data.name}</div>
    </>
  );
}
