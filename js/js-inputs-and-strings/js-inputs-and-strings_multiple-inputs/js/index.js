/*

Important: Create a fork for each sub challenge!
Implement the following functionality:

1. On button click: The value of the first input field is copied into the second input field

2. On button click: The value of the first input field is copied in uppercase into the second input field

3. On button click: The values of the two input fields switch.

*/

const firstInput = document.querySelector("[data-js=first-input]");
const secondInput = document.querySelector("[data-js=second-input]");
const button = document.querySelector("[data-js=button]");

// 1. On button click: The value of the first input field is copied into the second input field
// button.addEventListener("click", () => {
//   let copyFirst = firstInput.value;

//   secondInput.value = copyFirst;

//   console.log("firstInput.value ", firstInput.value);
//   console.log("secondInput.value ", secondInput.value);
//   console.log("copyFirst ", copyFirst);
// });

// 2. On button click: The value of the first input field is copied in uppercase into the second input field
// button.addEventListener("click", () => {
//   const oldValue = firstInput.value;
//   const newValue = oldValue.toUpperCase();

//   secondInput.value = newValue;

//   console.log("firstInput.value ", firstInput.value);
//   console.log("newValue ", newValue);
//   console.log("secondInput.value ", secondInput.value);
// });

// 3. On button click: The values of the two input fields switch.
button.addEventListener("click", () => {
  let extraCup = firstInput.value;

  firstInput.value = secondInput.value;
  secondInput.value = extraCup;
});
