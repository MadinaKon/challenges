console.clear();

const input = document.querySelector('[data-js="toUpperCase"]');

input.addEventListener("input", () => {
  input.value = input.value.toUpperCase();
});
