console.clear();

// Add the following functionality to the submit event handler:

// Use the values of the numberA and numberB inputs to perform the operation selected by the operator input on them.
// You can use the provided helper functions add(), subtract(), multiply() and divide().
// Assign the result to the result variable.

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');
const numberA = document.querySelector("#number-a");
const numberB = document.querySelector("#number-b");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log("DATA ", data);
  console.log("data.numberA ", typeof parseInt(data.numberA));
  console.log("data.numberB ", typeof parseInt(data.numberB));

  if (data.operator === "addition") {
    // result = add(data.numberA * 1 + data.numberB * 1);
    // result = add(parseInt(data.numberA) + parseInt(data.numberB));
    // result = add(parseInt(data.numberA + data.numberB));
    // result = Number(add(data.numberA + data.numberB));
    // result = Number(add(data.numberA + " " + data.numberB));
    // result = add(data.numberA + " " + data.numberB);
    // result = add(parseInt(data.numberA) + parseInt(data.numberB));
    result = add(parseInt(data.numberA + data.numberB));
    console.log("RESULT ", result);

    return result;
  } else if (data.operator === "subtraction") {
    result = subtract(numberA, numberB);
  } else if (data.operator === "multiplication") {
    result = multiply(numberA, numberB);
  } else if (data.operator === "division") {
    result = divide(numberA, numberB);
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
