import Link from "./Link";
import Image from "./Image";
export default function Logo({ logo }) {
  return (
    <Link href="#">
      <Image src={logo} alt="logo" />
    </Link>
  );
}
