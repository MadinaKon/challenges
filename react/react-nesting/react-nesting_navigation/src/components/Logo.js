import Link from "./Link";
import Image from "./Image";
import logo from "../img/logo.jpg";

export default function Logo() {
  return (
    <>
      <Link href="#">
        <Image className="round-image" src={logo} alt="logo" />
      </Link>
    </>
  );
}
