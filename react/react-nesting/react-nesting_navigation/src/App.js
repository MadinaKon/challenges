import "./styles.css";

import avatar from "./img/avatar.jpg";
import logo from "./img/logo.jpg";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Link from "./components/Link";
export default function App() {
  return (
    <>
      <Header className="header">
        <Link href="#">
          <img className="round-image" src={logo} alt="logo" />
        </Link>
        <Navigation>
          <Link className="navigation__link" href="#home">
            Home
          </Link>
          <Link className="navigation__link" href="#about">
            About
          </Link>
          <Link className="navigation__link" href="#impressum">
            Impressum
          </Link>
        </Navigation>
        <button
          type="button"
          onClick={() => console.log("I could toggle a profile!")}
          aria-label="toggle profile"
        >
          <img className="round-image" src={avatar} alt="avatar" />
        </button>
      </Header>
      <main>content goes here…</main>
    </>
  );
}
