console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array
const listItem = document.createElement("li");

const ol = document.createElement("ol");
ol.append(listItem);
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write/change code here --v--
for (let language of programmingLanguages) {
  listItem.textContent = language;
}
// --^-- write/change code here --^--
