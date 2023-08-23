console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  console.log("formData ", formData);

  const data = Object.fromEntries(formData);

  let ageBadnessSum = parseInt(data.age) + parseInt(data.badness);

  console.log(`The age-badness-sum of ${data.firstName} is ${ageBadnessSum}`);
});
