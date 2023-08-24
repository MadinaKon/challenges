console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');
const headline = document.getElementById("headline");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  console.log("formData ", formData);

  const data = Object.fromEntries(formData);
  console.log("DATA ", data);

  createListEntries(data.headline, data.task);

  form.reset();
  headline.focus();
});

function createListEntries(headline, task) {
  const li = document.createElement("li");
  li.className = "todoList--list--item";

  const headlineAppended = document.createElement("h2");
  headlineAppended.className = "todoList--list--title";
  headlineAppended.textContent = headline;
  li.append(headlineAppended);

  const taskText = document.createElement("p");
  taskText.textContent = task;

  li.append(taskText);

  todoList.append(li);
}
