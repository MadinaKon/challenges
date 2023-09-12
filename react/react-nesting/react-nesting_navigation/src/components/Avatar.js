import Link from "./Link";
import Navigation from "./Navigation";
import Image from "./Image";

export default function Avatar({ avatar }) {
  return (
    <>
      {/* <Navigation>
        <Link className="navigation__link" href="#home">
          Home
        </Link>
        <Link className="navigation__link" href="#about">
          About
        </Link>
        <Link className="navigation__link" href="#impressum">
          Impressum
        </Link>
      </Navigation> */}
      <button
        type="button"
        onClick={() => console.log("I could toggle a profile!")}
        aria-label="toggle profile"
      >
        <Image className="round-image" src={avatar} alt="avatar" />
      </button>
    </>
  );
}
