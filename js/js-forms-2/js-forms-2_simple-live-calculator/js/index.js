console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

// let value1 = firstInput.value;
// let value2 = secondInput.value;

// firstInput.addEventListener("input", () => {
//   // reassigning/ updating the value1 with the user input for firstInput
//   value1 = firstInput.value;
//   multiply(value1, value2);
// });

// secondInput.addEventListener("input", () => {
//   // reassigning/ updating the value2 with the user input for secondInput
//   value2 = secondInput.value;
//   multiply(value1, value2);
// });

// function multiply(a, b) {
//   result.textContent = a * b;
// }

// Recap solution
firstInput.addEventListener("input", multiply);

secondInput.addEventListener("input", multiply);

function multiply() {
  result.textContent = firstInput.value * secondInput.value;
}
