import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  function getRandomElement(array) {
    // returns random element inside array
    return array[Math.floor(Math.random() * array.length)];
  }

  function handleClick() {
    const randomVolumeObject = getRandomElement(volumes);
    router.push(`/volumes/${randomVolumeObject.slug}`);
  }

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>

      <button onClick={handleClick}>Navigate to a random volume</button>
    </>
  );
}
