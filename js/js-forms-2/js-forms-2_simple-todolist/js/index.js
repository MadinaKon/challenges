console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');
const headline = document.getElementById("headline");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  const data = Object.fromEntries(formData);

  createListEntries(data.headline, data.task);

  form.reset();
  headline.focus();
});

function createListEntries(headline, task) {
  const li = document.createElement("li");

  const headerElement = createHeadline(headline);
  li.append(headerElement);

  const pElement = createParagraph(task);
  li.append(pElement);

  todoList.append(li);
}

function createHeadline(text) {
  const headlineAppended = document.createElement("h2");
  headlineAppended.className = "todoList--list--title";
  headlineAppended.textContent = text;
  return headlineAppended;
}

function createParagraph(paragraphText) {
  const taskText = document.createElement("p");
  taskText.textContent = paragraphText;
  return taskText;
}
