console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

let dia1 = pizzaInput1.value;
let dia2 = pizzaInput2.value;

pizzaInput1.addEventListener("input", (event) => {
  dia1 = event.target.value;
  console.log("pizzaSize1: ", dia1);
  calculatePizzaGain(dia1, dia2);
});

pizzaInput2.addEventListener("input", (event) => {
  dia2 = event.target.value;
  console.log("pizzaSize2 ", dia2);
  calculatePizzaGain(dia1, dia2);
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  let radius1 = diameter1 / 2;
  let radius2 = diameter2 / 2;

  let area1 = Math.PI * radius1 ** 2;
  let area2 = Math.PI * radius2 ** 2;

  console.log("area1 ", area1);
  console.log("area2 ", area2);

  let calculatedPizzaGainPercentage = ((area2 - area1) / area1) * 100;

  console.log("calculatedPizzaGainPercentage ", calculatedPizzaGainPercentage);

  output.textContent = Math.round(calculatedPizzaGainPercentage);
}

calculatePizzaGain(dia1, dia2);

// Task 2
// define the function updatePizzaDisplay here

// Task 3
// define the function updateOutputColor here
