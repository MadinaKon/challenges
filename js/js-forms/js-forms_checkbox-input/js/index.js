console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const checkBox = document.getElementById("tos");

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

hideTosError();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const tos = event.target.elements.tos.checked;

  // --v-- write your code here --v--
  if (!tos) {
    showTosError();
    return;
  }
  hideTosError();
  // --^-- write your code here --^--
  alert("Form submitted");
});
