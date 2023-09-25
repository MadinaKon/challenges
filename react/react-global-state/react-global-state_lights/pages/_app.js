import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const stateOfLights = [
  { id: 1, name: "Kitchen", isOn: true },
  { id: 2, name: "Bath", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(stateOfLights);

  function handleToggle(lightId) {
    setLights(
      lights.map((light) =>
        light.id === lightId ? { ...light, isOn: true } : light
      )
    );
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} lights={lights} handleToggle={handleToggle} />
    </Layout>
  );
}
