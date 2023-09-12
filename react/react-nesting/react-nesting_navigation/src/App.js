import "./styles.css";

import avatar from "./img/avatar.jpg";
import logo from "./img/logo.jpg";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Link from "./components/Link";
import Logo from "./components/Logo";
import Avatar from "./components/Avatar";

export default function App() {
  function handleClick() {
    console.log("I could toggle a profile!");
  }
  return (
    <>
      <Header className="header">
        <Logo logo={logo} />
        <Navigation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>
        <Avatar avatar={avatar} handleClick={handleClick} />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
