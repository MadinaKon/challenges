import { Fragment, useState } from "react";
import Winner from "../Winner";
import {
  CarButton,
  AllCarRoutes,
  DistanceHeadline,
  Distance,
  Track,
} from "./CarRace.styled";
import { initialCars, getRandomDistance } from "../../utils/utils";
import { useImmer } from "use-immer";

const finishLine = 200;

// export default function CarRace() {
//   const [cars, setCars] = useState(initialCars);

//   function moveCar(clickedCar) {
//     const coveredDistance = getRandomDistance();
//     console.log("clickedCar", clickedCar);
//     console.log("coveredDistance", coveredDistance);

//     setCars(
//       cars.map((car) =>
//         car.emoji === clickedCar.emoji
//           ? {
//               ...car,
//               position: {
//                 ...car.position,
//                 x: coveredDistance,
//                 lastDistance: coveredDistance,
//               },
//             }
//           : car
//       )
//     );
//   }

//   const winner = cars.find((car) => car.position.x >= finishLine);

//   return (
//     <>
//       {winner ? (
//         <Winner winner={winner} onRestart={() => setCars(initialCars)} />
//       ) : (
//         <AllCarRoutes $finishLine={finishLine}>
//           <DistanceHeadline>Last Distance</DistanceHeadline>
//           {cars.map((car) => (
//             <Fragment key={car.emoji}>
//               <Track>
//                 <CarButton
//                   onClick={() => moveCar(car)}
//                   $positionX={car.position.x}
//                   $lastDistance={car.position.lastDistance}
//                   aria-label={`Move clicked car forward`}
//                 >
//                   {car.emoji}
//                 </CarButton>
//               </Track>
//               <Distance>{car.position.lastDistance}</Distance>
//             </Fragment>
//           ))}
//         </AllCarRoutes>
//       )}
//     </>
//   );
// }

export default function CarRace() {
  const [cars, updateCars] = useImmer(initialCars);

  function moveCar(clickedCar) {
    const coveredDistance = getRandomDistance();

    updateCars((draft) => {
      const carWithIndex = draft.findIndex(
        (car) => car.emoji === clickedCar.emoji
      );
      // Use the draft array to find the index of the car you want to update
      // Combine the draft array with the found index to assign the same values to position.x and position.lastDistance as before.

      // carWithIndex.position.lastDistance = position.x + coveredDistance;
      // carWithIndex.position.x = position.lastDistance;
      // carWithIndex.position.lastDistance = position.lastDistance;
      // carWithIndex.position.x = position.x;
      draft.position.lastDistance =
        carWithIndex.position.lastDistance + coveredDistance;
      draft.position.x = carWithIndex.position.x;
    });
  }

  const winner = cars.find((car) => car.position.x >= finishLine);

  return (
    <>
      {winner ? (
        <Winner winner={winner} onRestart={() => updateCars(initialCars)} />
      ) : (
        <AllCarRoutes $finishLine={finishLine}>
          <DistanceHeadline>Last Distance</DistanceHeadline>
          {cars.map((car) => (
            <Fragment key={car.emoji}>
              <Track>
                <CarButton
                  onClick={() => moveCar(car)}
                  $positionX={car.position.x}
                  $lastDistance={car.position.lastDistance}
                  aria-label={`Move clicked car forward`}
                >
                  {car.emoji}
                </CarButton>
              </Track>
              <Distance>{car.position.lastDistance}</Distance>
            </Fragment>
          ))}
        </AllCarRoutes>
      )}
    </>
  );
}
