import { useEffect, useState } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  async function getISSCoords() {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setCoords({ longitude: data.longitude, latitude: data.latitude });
      // setCoords(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getISSCoords();
    let interValId = setInterval(getISSCoords, 5000);
    // Cleanup function
    return () => {
      // Clear the interval when the component unmounts
      // or when the dependency array changes
      clearInterval(interValId);
    };
  }, []);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}
