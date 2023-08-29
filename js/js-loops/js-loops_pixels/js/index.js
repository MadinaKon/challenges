console.clear();
import { pixelValues } from "./pixelValues.js";

const canvas = document.querySelector('[data-js="canvas"]');

// Solution with forEach
// pixelValues.forEach((outerPixels) => {
//   outerPixels.forEach((data) => {
//     let div = document.createElement("div");
//     div.classList.add("pixel");
//     div.style.backgroundColor = " " + data + "";
//     canvas.append(div);
//   });
// });

// loop the outer array
for (let i = 0; i < pixelValues.length; i++) {
  // get the size of the inner array
  var innerArrayLength = pixelValues[i].length;
  // loop the inner array
  for (let j = 0; j < innerArrayLength; j++) {
    console.log("[" + i + "," + j + "] = " + pixelValues[i][j]);
    let div = document.createElement("div");
    div.classList.add("pixel");
    div.style.backgroundColor = " " + pixelValues[i][j] + "";
    canvas.append(div);
  }
}
