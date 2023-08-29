console.clear();
const pixelValues = [
  [
    "#abcccc",
    "#9bb9b7",
    "#b8c7c9",
    "#a5c5c5",
    "#a8c9c9",
    "#99b9c2",
    "#9bb9b7",
    "#9bb9b7",
    "#92afb9",
    "#9bb9b7",
  ],
  [
    "#9bb9b7",
    "#91a8b9",
    "#9bb9b7",
    "#9bb9b7",
    "#91b9b4",
    "#8eb99b",
    "#9bb9b7",
    "#9bb9b7",
    "#89b9a9",
    "#9bb9b7",
  ],
  [
    "#9bb9b7",
    "#9bb9b7",
    "#9bb9b7",
    "#9bb9b7",
    "#9bb9b6",
    "#9bb9b7",
    "#9bb9b7",
    "#ec7f5a",
    "#9bb9b7",
    "#9bb9b7",
  ],
  [
    "#9bb9b7",
    "#9bb9b7",
    "#ec4811",
    "#ec4811",
    "#ec6a3e",
    "#9bb9b7",
    "#e05334",
    "#ec4811",
    "#9bb9b7",
    "#9bb9b7",
  ],
  [
    "#9bb9b7",
    "#ed4913",
    "#160601",
    "#ec4811",
    "#fe4d13",
    "#ec4811",
    "#ec4811",
    "#ec7e53",
    "#9bb9b7",
    "#94abb9",
  ],
  [
    "#9bb9b7",
    "#ec590b",
    "#ec4812",
    "#d34010",
    "#ec4811",
    "#ec4811",
    "#ec4811",
    "#ec815b",
    "#9bb9b7",
    "#9bb9b7",
  ],
  [
    "#9bb9b7",
    "#9bb9b7",
    "#ec4811",
    "#ec4811",
    "#b8370d",
    "#9bb9b7",
    "#f7723e",
    "#ec4811",
    "#9bb4c0",
    "#9bb9b7",
  ],
  [
    "#96a8b9",
    "#9bb9b7",
    "#9bb9b7",
    "#9bb9b7",
    "#9bb9b7",
    "#98b9a1",
    "#9bb9b7",
    "#ec7745",
    "#9bb9b7",
    "#9bb9b7",
  ],
  [
    "#9bb9b7",
    "#9bb9b7",
    "#9bb9b7",
    "#91b99c",
    "#9bb9b7",
    "#95b2b2",
    "#9bb9b7",
    "#9bb9b7",
    "#9bb9b7",
    "#9aacb9",
  ],
  [
    "#9bb9b7",
    "#87b0b6",
    "#9bb9b7",
    "#9bb9b7",
    "#92afaf",
    "#8aa5a5",
    "#859f9f",
    "#8eaaaa",
    "#a2b9a7",
    "#9bb9b7",
  ],
];

const canvas = document.querySelector('[data-js="canvas"]');

for (let i = 0; i < pixelValues.length; i++) {
  for (let color of pixelValues) {
    let div = document.createElement("div");
    div.classList.add("pixel");

    console.log("pixelValues[color] ", color);
    console.log("pixelValues[color] ", pixelValues[color]);
    console.log("pixelValues[i][color] ", pixelValues[i][color]);
    // div.style.backgroundColor = pixelValues[i][0];
    // div.style.backgroundColor = pixelValues[color][i];
    // div.style.backgroundColor = pixelValues[i][i];

    div.style.backgroundColor = pixelValues[color[i]];
    canvas.append(div);
  }
}
