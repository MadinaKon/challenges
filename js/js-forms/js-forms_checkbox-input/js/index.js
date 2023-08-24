console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

// make the error message hidden initially (before the form is submitted)
hideTosError();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const isTosChecked = event.target.elements.tos.checked;

  // if (!isTosChecked) {
  //   showTosError();
  //   return;
  // }
  // hideTosError();

  if (isTosChecked) {
    hideTosError();
  } else {
    showTosError();
  }
  alert("Form submitted");
});
