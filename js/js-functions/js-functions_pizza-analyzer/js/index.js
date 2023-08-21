console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // write your code here
  console.log(pizzaSize1);
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  console.log(pizzaSize2);
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
  console.log();

  let calculatedPizzaGainPercentage = ((area2 - area1) / area1) * 100;

  console.log("calculatedPizzaGainPercentage ", calculatedPizzaGainPercentage);

  output.textContent = Math.round(calculatedPizzaGainPercentage);
}

//console.log(calculatePizzaGain(12, 10));

calculatePizzaGain(12, 26);

// Task 2
// define the function updatePizzaDisplay here

// Task 3
// define the function updateOutputColor here
