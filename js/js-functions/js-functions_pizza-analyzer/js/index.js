console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

let dia1 = "";
let dia2 = "";

pizzaInput1.addEventListener("input", (event) => {
  console.log("pizzaInput1 ", pizzaInput1);
  dia1 = event.target.value;

  console.log("event.target.value ", event.target.value);
});

pizzaInput2.addEventListener("input", (event) => {
  console.log("pizzaInput2 ", pizzaInput2);
  dia2 = event.target.value;
  console.log("event.target.value ", event.target.value);
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  // formula area = radius² × pi

  // let pizzaArea1 = (diameter1 / 2) ** 2 * Math.PI;
  // let pizzaArea2 = (diameter2 / 2) ** 2 * Math.PI;

  let pizzaArea1 = (dia1 / 2) ** 2 * Math.PI;
  let pizzaArea2 = (dia2 / 2) ** 2 * Math.PI;

  console.log("pizzaArea1 ", pizzaArea1);
  console.log("pizzaArea2 ", pizzaArea2);

  let calculatedValue = ((pizzaArea2 - pizzaArea1) / pizzaArea1) * 100;

  console.log("Math.round(calculatedValue) ", Math.round(calculatedValue));
  output.textContent = Math.round(calculatedValue);
}

calculatePizzaGain(dia1, dia2);

// Task 2
// define the function updatePizzaDisplay here

// Task 3
// define the function updateOutputColor here
