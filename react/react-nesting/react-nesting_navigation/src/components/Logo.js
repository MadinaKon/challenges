import Link from "./Link";
import Image from "./Image";

export default function Logo({ src }) {
  return (
    <>
      <Link href="#">
        <Image className="round-image" src={src} alt="logo" />
      </Link>
    </>
  );
}
