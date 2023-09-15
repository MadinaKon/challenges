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

  useEffect(() => {
    async function getISSCoords() {
      try {
        const response = await fetch(URL);
        const data = response.json();
        console.log("DATA ", data);
        setCoords(data);
      } catch (error) {
        console.log(error);
      }
      // data
      //   .then((obj) => setCoords(obj.longitude, obj.latitude))
      //   .catch((error) => console.error(error));

      // setCoords(data.longitude, data.latitude);
      // setCoords({ longitude: data.longitude, latitude: data.latitude });
      // return data;
    }

    //   let interValId = setInterval(() => {
    //     getISSCoords()
    //       .then((data) =>
    //         setCoords({ longitude: data.longitude, latitude: data.latitude })
    //       )
    //       .catch((error) => console.error(error));
    //   }, 5000);

    //   clearInterval(interValId);
    // }, []);
    let interValId = setInterval(getISSCoords, 5000);
    console.log("interValId ", interValId);
    clearInterval(interValId);
  }, []);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={(coords) => setCoords(coords)}
        // onRefresh={getISSCoords}
        // onRefresh={() => getISSCoords(coords)}

        // onRefresh={() => setCoords(coords.longitude, coords.latitude)}
        // onRefresh={() => setCoords(coords)}
        //  onRefresh={() => setCoords(coords.longitude, coords.latitude)}
      />
      {JSON.stringify(coords)}
    </main>
  );
}
